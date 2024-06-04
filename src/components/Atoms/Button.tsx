"use client";
import React from "react";

interface ButtonProps {
  text: string;
  colorType?: "default" | "inverted";
  onClick?: () => void;
}

const Button = ({ text, colorType = "default", onClick }: ButtonProps) => {
  const colorScheme =
    colorType === "default"
      ? "text-back-dark bg-primary-light shadow-3xl shadow-primary-light/60 hover:bg-bg-light"
      : "text-primary-light bg-back-dark hover:bg-back-light";

  return (
    <button
      onClick={onClick}
      type="button"
      className={`active:text-font-dark active:bg-font-light
        active:border-font-dark border border-solid rounded-full
        text-sm px-3 py-2 border-primary-light outline outline-transparent
        pl-7 pr-7 m-1
      hover:text-font-light hover:border-transparent hover:outline-font-light
        ${colorScheme}`}
    >
      {text}
    </button>
  );
};

export default Button;
