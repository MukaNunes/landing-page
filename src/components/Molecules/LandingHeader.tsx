"use client";
import React from "react";
import Brand from "@/components/Atoms/Brand";
import NavMenu from "../Atoms/NavMenu";
import LoginButtons from "./LoginButtons";

const LandingHeader = () => {
  return (
    <header className="flex items-center p-3 pl-10 pr-10">
      <Brand />
      <NavMenu />
      <LoginButtons />
    </header>
  );
};

export default LandingHeader;