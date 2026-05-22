"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export function Toast({ toast, onClose, onAction }) {
  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className={`toast-notification glass-panel ${toast.visible ? "toast-notification--visible" : ""}`}>
      {toast.image && (
        <div className="toast-notification__thumb">
          <img src={toast.image} alt={toast.name} width={40} height={40} />
        </div>
      )}
      <div className="toast-notification__body">
        <span className="toast-notification__label">Added to bag</span>
        <strong className="toast-notification__name">{toast.name}</strong>
      </div>
      <div className="toast-notification__actions">
        <button
          className="button button--primary button--small toast-notification__btn"
          type="button"
          onClick={() => {
            onAction();
            onClose();
          }}
        >
          View
        </button>
        <button
          className="icon-button toast-notification__close"
          type="button"
          onClick={onClose}
          aria-label="Dismiss notification"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
