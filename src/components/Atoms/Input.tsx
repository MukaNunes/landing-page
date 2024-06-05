"use client";

import React, { ReactElement } from "react";

interface InputProps {
  name: string;
  colorType?: "light" | "dark";
  placeHolder?: string;
  actionButton?: ReactElement;
}

export default function Input({
  name,
  colorType = "light",
  placeHolder = "",
  actionButton = undefined,
}: Readonly<InputProps>) {
  const colorScheme =
    colorType === "light"
      ? "text-font-light bg-back-dark placeholder-primary-light border-primary-light"
      : "text-font-light bg-back-light placeholder-primary-dark border-primary-dark";

  return (
    <div
      className={`m-0 p-0 flex border overflow-hidden rounded-full box-border h-10 w-full ${colorScheme}`}
    >
      <input
        type="text"
        placeholder={placeHolder}
        name={name}
        className={`flex grow outline outline-transparent text-sm px-3 py-2 ${colorScheme}`}
      />
      {actionButton}
    </div>
  );
}
