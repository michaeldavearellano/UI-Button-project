import React from "react";

export default function Button({ children, variant = "primary", size = "md", onClick, disabled = false }) {
  const base = "rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400 disabled:bg-blue-200",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-400 disabled:border-gray-300 disabled:text-gray-400",
    ghost: "text-blue-500 hover:bg-blue-100 focus:ring-blue-400 disabled:text-gray-400",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button disabled={disabled} onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  );
}