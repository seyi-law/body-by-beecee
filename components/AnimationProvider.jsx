"use client";

import { useEffect } from "react";

export function AnimationProvider() {
  useEffect(() => {
    /* ── 1. Text splitting ──────────────────────────────── */
    // Elements with data-text-split get their words wrapped in animated spans recursively, preserving HTML nodes
    document.querySelectorAll("[data-text-split]").forEach((el) => {
      const step = Number(el.dataset.textSplit) || 70;
      const baseDelay = Number(el.dataset.delay) || 0;
      let wordIndex = 0;

      function recurse(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.nodeValue;
          // Only split if there's actual content (ignoring empty whitespace nodes)
          if (!text.trim()) return;

          const words = text.split(/\s+/).filter(Boolean);
          const fragment = document.createDocumentFragment();

          words.forEach((word, idx) => {
            const wrap = document.createElement("span");
            wrap.className = "word-wrap";

            const inner = document.createElement("span");
            inner.className = "word";
            inner.style.transitionDelay = `${baseDelay + wordIndex * step}ms`;
            inner.textContent = word;

            wrap.appendChild(inner);
            fragment.appendChild(wrap);

            // Add spaces between words
            if (idx < words.length - 1) {
              fragment.appendChild(document.createTextNode(" "));
            }
            wordIndex++;
          });

          // If the text node starts or ends with spaces, keep them
          if (text.startsWith(" ")) {
            fragment.insertBefore(document.createTextNode(" "), fragment.firstChild);
          }
          if (text.endsWith(" ")) {
            fragment.appendChild(document.createTextNode(" "));
          }

          node.parentNode.replaceChild(fragment, node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          Array.from(node.childNodes).forEach(recurse);
        }
      }

      recurse(el);
    });

    /* ── 2. Reduced-motion bail-out ─────────────────────── */
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      document
        .querySelectorAll("[data-animate], .word, .section-heading")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    /* ── 3. Auto-stagger children & 4. Intersection Observer (Dynamic via MutationObserver) ── */
    const observedElements = new WeakSet();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          const delay = Number(target.dataset.delay ?? 0);
          setTimeout(() => target.classList.add("is-visible"), delay);
          io.unobserve(target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    function observeNewElements() {
      // 1. Assign stagger delays dynamically to any elements container
      document.querySelectorAll("[data-stagger]").forEach((parent) => {
        const step = Number(parent.dataset.stagger) || 90;
        parent
          .querySelectorAll(
            ":scope > [data-animate], :scope > * > [data-animate]"
          )
          .forEach((child, i) => {
            // Note: we re-apply delays for dynamic lists so stagger indexes reset properly
            child.dataset.delay = String(i * step);
          });
      });

      // 2. Observe any unobserved animate or text-split targets
      document
        .querySelectorAll("[data-animate], [data-text-split]")
        .forEach((el) => {
          if (!observedElements.has(el)) {
            io.observe(el);
            observedElements.add(el);
          }
        });
    }

    // Initial check
    observeNewElements();

    // Listen for DOM changes to automatically capture dynamic React updates
    const mutationObserver = new MutationObserver(() => {
      observeNewElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    /* ── 5. 3-D tilt on hover ───────────────────────────── */
    const MAX = 7;
    function onMove(e) {
      const card = e.currentTarget;
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 2; // -1 → 1
      const y = ((e.clientY - top) / height - 0.5) * 2;
      card.style.transform = `perspective(900px) rotateX(${(
        -y * MAX
      ).toFixed(1)}deg) rotateY(${(x * MAX).toFixed(1)}deg) translateZ(10px)`;
      card.style.transition = "transform 0.08s linear";
    }
    function onLeave(e) {
      const card = e.currentTarget;
      card.style.transform = "";
      card.style.transition =
        "transform 0.55s cubic-bezier(0.16,1,0.3,1)";
    }

    const tiltEls = document.querySelectorAll("[data-tilt]");
    tiltEls.forEach((el) => {
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      io.disconnect();
      mutationObserver.disconnect();
      tiltEls.forEach((el) => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return null;
}
