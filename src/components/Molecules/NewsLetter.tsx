"use client";
import Button from "@/components/Atoms/Button";
import Input from "@/components/Atoms/Input";

export default function NewsLetter() {
  const subscribeBtn = <Button text="Subscribe" />;

  return (
    <div className="self-start">
      <span className="text-sm">NewsLetter</span>
      <Input
        name="newsletter"
        placeHolder="Enter your email"
        colorType="dark"
        actionButton={subscribeBtn}
      />
    </div>
  );
}
