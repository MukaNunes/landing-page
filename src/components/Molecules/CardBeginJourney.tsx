"use client";

import Button from "@/components/Atoms/Button";
import SquareDecoration from "@/components/Atoms/SquareDecoration";

export default function CardBeginJourney() {
  return (
    <section className="grid grid-cols-2 relative">
      <SquareDecoration hPosition="right" vPosition="bottom" />
      <div className="bg-contain bg-no-repeat bg-center bg-[url('/people/section-a.png')]"></div>

      <div className="p-40 pl-20 pr-0">
        <span className="big-title mb-5 text-font-light">
          Your Learning
          <br />
          Journey
          <br />
          Begins Here!
        </span>

        <span className="small-title text-font-span">
          where knowledge meets convenience in the palm of your hand!
        </span>
        <Button text="Get Started" />
      </div>
    </section>
  );
}
