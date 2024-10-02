"use client";
import React from "react";

import { siteConfig } from "@/config/site";
import { Menu } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function NavbarDesktop({ className }: { className?: string }) {
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu>
        {siteConfig.navMenuItems.map((item, index) => (
          <Link key={Number(index)} href={item.href} className="text-white">
            {item.label}
          </Link>
        ))}
      </Menu>
    </div>
  );
}
