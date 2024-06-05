"use client";

import Image from "next/image";

export default function Brand() {
  return (
    <Image
      src={`/brand/logo.png`}
      alt="logo"
      width="169"
      height="36"
      className="m-2"
    />
  );
}
