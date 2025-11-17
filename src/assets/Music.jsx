import React from "react";

/**
 * YouTubeShortsOutline
 * Props:
 *  - size: number|string (pixel or css size) default 24
 *  - color: stroke color (default "currentColor")
 *  - strokeWidth: number (default 1.5)
 *  - className: optional
 */
const YouTubeShortsOutline = React.forwardRef(function YouTubeShortsOutline(
  { size = 24, color = "currentColor", strokeWidth = 1.5, className, title = "YouTube Shorts", ...rest },
  ref
) {
  const numericSize = typeof size === "number" ? size : size;
  return (
    <svg
      ref={ref}
      width={numericSize}
      height={numericSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
      {...rest}
    >
      <title>{title}</title>

      {/* phone / vertical rounded rectangle outline */}
      <rect
        x="4"
        y="2.5"
        width="16"
        height="19"
        rx="3.2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* small notch / camera dot at top (outline style) */}
      <circle cx="12" cy="5.2" r="0.45" fill={color} />

      {/* play triangle centered vertically slightly above center (outline triangle using stroke) */}
      <path
        d="M10.3 8.8 L15 11.7 L10.3 14.6 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />

      {/* subtle 'S' curve to hint 'Shorts' (decorative, outline stroke) */}
      <path
        d="M9.2 16.4c0.6 0.9 2.6 0.9 3.2 0 0.6-0.9-0.3-1.6-1.2-2.1-0.9-0.5-1.2-1-0.9-1.8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
});

export default YouTubeShortsOutline;
