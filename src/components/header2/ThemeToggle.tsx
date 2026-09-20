"use client";

import MoonIcon from "@/icons/moon";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      // Detectar preferencia del sistema
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      document.documentElement.classList.toggle("dark", prefersDark);
      setDark(prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;

    document.documentElement.classList.toggle("dark", newDark);

    localStorage.setItem(
      "theme",
      newDark ? "dark" : "light"
    );

    setDark(newDark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="header__buttonI"
    >
  {dark ? (
        <MoonIcon/> 
  ) : (
        <MoonIcon/> 
  )}
    </button>
  );
}
