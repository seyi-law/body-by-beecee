"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "../app/data/content";

export function BlogPreview() {
  return (
    <section className="blog-preview" id="journal">
      <div className="blog-preview__header" data-animate="fade-up">
        <h2>Latest Insights from the Blog</h2>
        <div className="blog-preview__arrows" aria-hidden="true">
          <span>
            <ChevronLeft size={16} />
          </span>
          <span>
            <ChevronRight size={16} />
          </span>
        </div>
      </div>

      <div className="blog-grid" data-stagger="90">
        {blogPosts.map((post) => (
          <article className="blog-card" key={post.title} data-animate="fade-up">
            <div className="blog-card__image">
              <Image src={post.image} alt={post.title} fill sizes="280px" />
            </div>
            <span>{post.tag}</span>
            <h3>{post.title}</h3>
            <a href="#collection">
              Read more
              <ArrowRight size={12} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
