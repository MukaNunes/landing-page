"use client";

interface SquareDecorationProps {
  hPosition: "left" | "right";
  vPosition: "top" | "bottom";
}

export default function SquareDecoration({
  hPosition,
  vPosition
}: Readonly<SquareDecorationProps>) {
  return (
    <div
      className={`bg-gradient-to-r from-back-light to-back-dark
        rounded-3xl
        rotate-45
        absolute
        w-[300px]
        h-[300px]
        ${hPosition === "left" ? "-left-[130px]" : "-right-[130px]"}
        ${vPosition === "top" ? "-top-[30px]" : "-bottom-[115px]"}`}
    ></div>
  );
}
