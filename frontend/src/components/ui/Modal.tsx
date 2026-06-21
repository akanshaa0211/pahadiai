/**
 * Modal Component
 * Props:
 * - isOpen: controls modal visibility
 * - onClose: closes modal
 * - title: modal heading
 * - children: modal content
 */

import { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          color: "black",
          padding: "25px",
          borderRadius: "12px",
          width: "90%",
          maxWidth: "450px",
        }}
      >
        <h2>{title}</h2>

        <div>{children}</div>

        <button
          onClick={onClose}
          style={{
            marginTop: "20px",
            padding: "10px 16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;