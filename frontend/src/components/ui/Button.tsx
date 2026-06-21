/**
 * Button Component
 * Props:
 * - variant: "primary" | "secondary" | "outline"
 * - size: "sm" | "md" | "lg"
 * - disabled: disables the button
 * - onClick: function called when button is clicked
 * - children: button text/content
 */

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  const baseStyle = {
    borderRadius: "8px",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    fontWeight: "bold",
  };

  const sizeStyle = {
    sm: { padding: "8px 12px", fontSize: "14px" },
    md: { padding: "10px 18px", fontSize: "16px" },
    lg: { padding: "14px 24px", fontSize: "18px" },
  };

  const variantStyle = {
    primary: {
      backgroundColor: "#2563eb",
      color: "white",
    },
    secondary: {
      backgroundColor: "#16a34a",
      color: "white",
    },
    outline: {
      backgroundColor: "transparent",
      color: "#2563eb",
      border: "1px solid #2563eb",
    },
  };

  return (
    <button
      style={{
        ...baseStyle,
        ...sizeStyle[size],
        ...variantStyle[variant],
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;