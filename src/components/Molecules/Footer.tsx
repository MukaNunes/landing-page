"use client";

import Brand from "@/components/Atoms/Brand";
import NavMenu from "@/components/Atoms/NavMenu";
import NewsLetter from "@/components/Molecules/NewsLetter";

export default function Footer() {
  return (
    <footer className="bg-back-light flex flex-col items-center pt-10 space-y-8 pl-20 pr-20 pb-5">
      <Brand />
      <NavMenu />
      <NewsLetter />
      <span className="text-sm w-full text-right">
        © 2024 Lerntolern. All right reserved
      </span>
    </footer>
  );
}
