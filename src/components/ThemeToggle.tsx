"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const nextLabel = theme === "default" ? "Night mode" : "Light mode";

  return (
    <div className="mx-auto flex w-full max-w-[1200px] justify-end px-8 py-3">
      <button
        type="button"
        onClick={toggleTheme}
        className="cursor-pointer rounded-md border-none px-4 py-2 text-sm font-medium text-white shadow-[0_2px_4px_var(--shadow)] transition-all duration-200 hover:-translate-y-px"
        style={{ backgroundColor: "var(--accent-color)" }}
        aria-label={`Switch to ${nextLabel.toLowerCase()}`}
      >
        {nextLabel}
      </button>
    </div>
  );
}
