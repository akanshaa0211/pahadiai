/**
 * Toast Component
 * Props:
 * - message: notification text
 * - type: "success" | "error" | "info"
 */

type ToastProps = {
  message: string;
  type?: "success" | "error" | "info";
};

function Toast({ message, type = "info" }: ToastProps) {
  const colors = {
    success: "#16a34a",
    error: "#dc2626",
    info: "#2563eb",
  };

  return (
    <div
      style={{
        backgroundColor: colors[type],
        color: "white",
        padding: "12px 18px",
        borderRadius: "8px",
        marginTop: "15px",
      }}
    >
      {message}
    </div>
  );
}

export default Toast;