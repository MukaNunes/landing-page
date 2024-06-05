"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "@/components/Atoms/Button";

export default function LoginButtons() {
  const router = useRouter();

  const handleClick = () => {
    console.log("foi");
    router.push("/login");
  };

  return (
    <div className="flex items-center mt-2 space-x-3">
      <Button text="Login" onClick={handleClick} />
      <Button text="Sign In" colorType="inverted" />
    </div>
  );
}
