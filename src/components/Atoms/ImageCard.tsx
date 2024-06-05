"use client";

export interface ImageCardProps {
  imageHeight?: "small" | "big";
}

export default function ImageCard({
  imageHeight = "small",
}: Readonly<ImageCardProps>) {
  const heightClass = imageHeight === "small" ? "h-[180px]" : "h-[400px]";

  return (
    <div
      className={`bg-back-card
        rounded-xl
        w-full
        ${heightClass}`}
    ></div>
  );
}

3;
