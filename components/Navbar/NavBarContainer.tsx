"use client";
import React from "react";
import NavbarDesktop from "./NavBarDesktop";
import { NavBarMobile } from "./NavBarMobile";

export default function NavBarContainer() {
  return (
    <>
      <div className="hidden sm:block">
        <NavbarDesktop className="top-8" />
      </div>
      <div className="block sm:hidden">
        <NavBarMobile />
      </div>
    </>
  );
}
