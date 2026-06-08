"use client";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-[38px] h-[38px] bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-900 transition-all active:scale-95 shadow-md flex items-center justify-center cursor-pointer"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-400" />
      )}
    </button>
  );
}
