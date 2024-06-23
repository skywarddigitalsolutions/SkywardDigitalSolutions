"use client";
import React from "react";
import { Menu } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function NavbarDesktop({ className }: { className?: string }) {
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu>
      {siteConfig.navMenuItems.map((item, index) => (
          <Link key={index} href={item.href} className="text-white">
            {item.label}
          </Link>
      ))}
      </Menu>
    </div>
  );
}
