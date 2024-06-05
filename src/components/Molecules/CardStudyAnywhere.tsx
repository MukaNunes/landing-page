"use client";

import SquareDecoration from "@/components/Atoms/SquareDecoration";

export default function CardStudyAnywhere() {
  return (
    <section className="grid grid-cols-2 relative">
      <SquareDecoration hPosition="left" vPosition="top" />
      <div className="p-40 pr-20 pl-0 relative">
        <span className="big-title mb-5 text-font-light">
          Study AnyWhere
          <br />
          Easily Online
        </span>

        <span className="small-title text-font-span">
          Discover the freedom of online learning. Our platform empowers you to
          access quality education from the comfort of your home or on the go.
        </span>
      </div>

      <div className="bg-contain bg-no-repeat bg-center bg-[url('/people/section-b.png')]"></div>
    </section>
  );
}
