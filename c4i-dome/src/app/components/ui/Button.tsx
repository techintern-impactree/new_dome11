"use client";
import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes, ReactNode, CSSProperties } from "react";
import greenDot from "../../../../public/assets/current-missions/icons/green-dot.png";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  fill_background_color?: string;
  border_border?: string;
  border_border_radius?: string;

  layout_gap?: string;
  layout_width?: string;
  layout_height?: string;
  padding_top?: string;
  padding_right?: string;
  padding_bottom?: string;
  padding_left?: string;
  position?: string;

  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "small" | "medium" | "large";

  children?: ReactNode;
  leftImage?: {
    src: string;
    width: number;
    height: number;
  };
  showStatusDot?: boolean;
  iconSpacing?: string;
}

const Button = ({
  text = "Active",
  text_font_size = "13px",
  text_font_family = "P3ppins",
  text_font_weight = "600",
  text_line_height = "normal",
  text_text_align = "center",
  text_color = "#FFFFFF",
  fill_background_color = "#A6FF0033",
  border_border = "1px solid #A6FF00",
  border_border_radius = "12px",

  layout_gap = "6px",
  layout_width = "100px",
  layout_height = "33px",
  padding_top = "6px",
  padding_right = "12px",
  padding_bottom = "6px",
  padding_left = "12px",
  position,

  variant = "primary",
  size = "medium",
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  leftImage,
  showStatusDot = true,
  iconSpacing,
  ...props
}: ButtonProps) => {
  const variantStyles = {
    primary: "hover:opacity-90 focus:ring-2 focus:ring-green-200",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300",
    outline:
      "border-2 border-green-300 text-green-700 bg-transparent hover:bg-green-50 focus:ring-green-200",
    danger: "bg-red-100 text-red-700 hover:bg-red-200 focus:ring-red-300",
  };

  const sizeStyles = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-base",
  };

  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    if (typeof onClick === "function") {
      onClick(event);
    }
  };

  const getIconSpacing = () => {
    if (iconSpacing) return iconSpacing;

    const fontSize = parseInt(text_font_size);
    if (fontSize >= 15) return "8px"; // for active button - row 1
    return "7px"; // last 7 days button - row 4
  };

  const customStyles: CSSProperties = {
    backgroundColor: fill_background_color,
    border: border_border,
    width: layout_width,
    height: layout_height,
    borderRadius: border_border_radius,
    fontSize: text_font_size,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    color: text_color,
    lineHeight: text_line_height,
    textAlign: "center" as const,
    paddingTop: padding_top,
    paddingRight: padding_right,
    paddingBottom: padding_bottom,
    paddingLeft: padding_left,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: getIconSpacing(), // dynamic spacing
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={customStyles}
      className={twMerge(
        baseClasses,
        variantStyles[variant],
        sizeStyles[size],
        position,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {showStatusDot && (
        <img
          src={greenDot.src}
          alt=""
          width={6}
          height={6}
          style={{
            width: "6px",
            height: "6px",
            display: "block",
          }}
        />
      )}

      {!showStatusDot && leftImage && (
        <img
          src={leftImage.src}
          alt=""
          width={leftImage.width}
          height={leftImage.height}
          style={{
            width: leftImage.width,
            height: leftImage.height,
          }}
        />
      )}

      <span
        style={{
          whiteSpace: "nowrap",
          lineHeight: text_line_height,
          color: "#FFFFFF",
        }}
      >
        {children || text}
      </span>
    </button>
  );
};

export default Button;
