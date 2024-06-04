"use client";
import React from "react";

interface InputProps {
  name: string;
  placeHolder?: string;
}

const Input = ({ name, placeHolder = "" }: InputProps) => {
  const colorScheme =
    "text-font-light bg-back-dark border-primary-light outline outline-transparent";

  return (
    <input
      type="text"
      placeholder={placeHolder}
      name={name}
      className={`border border-solid rounded-full text-sm px-3 py-2 ${colorScheme}`}
    />
  );
};

export default Input;
