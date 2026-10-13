import { useCallback, useState } from "react";

// The initial class is set by an inline script in index.html to prevent a flash.
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#0b0b0f" : "#fafafa");
      try {
        localStorage.setItem("theme", next);
      } catch {
        // Storage can be unavailable (private mode); the theme still applies for this visit.
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
