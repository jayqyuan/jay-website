"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      className={`w-fit p-2 rounded-md hover:scale-110 hover:bg-slate-800 hover:text-slate-200 dark:hover:bg-teal-600 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};
