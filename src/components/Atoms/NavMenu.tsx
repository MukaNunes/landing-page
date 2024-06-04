"use client";

import React from "react";
import { usePathname } from "next/navigation";

const IsActive = (route: string) => {
  return usePathname() === route ? "active" : "";
};

const NavMenu = () => {
  return (
    <ul className="navMenu text-ct grow mt-1 flex justify-center space-x-10">
      <li>
        <a className={IsActive("/")} href="/">
          Home
        </a>
      </li>
      <li>
        <a className={IsActive("/features")} href="/features">
          Features
        </a>
      </li>
      <li>
        <a className={IsActive("/pricing")} href="/pricing">
          Pricing
        </a>
      </li>
      <li>
        <a className={IsActive("/class")} href="/class">
          Class
        </a>
      </li>
      <li>
        <a className={IsActive("/about")} href="/about">
          About Us
        </a>
      </li>
    </ul>
  );
};

export default NavMenu;
