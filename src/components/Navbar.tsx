"use client";

import Link from "next/link";
import { site } from "@/data/site";

export function Navbar() {
  return (
    <header
      className="shadow-[0_2px_4px_var(--shadow)] transition-colors duration-300"
      style={{ backgroundColor: "var(--nav-bg)", color: "var(--nav-text)" }}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-4 font-[family-name:var(--font-jetbrains)]">
        <Link
          href="/"
          className="text-xl font-bold no-underline transition-opacity hover:opacity-80"
          style={{ color: "var(--nav-text)" }}
        >
          {site.name}
        </Link>
      </nav>
    </header>
  );
}
