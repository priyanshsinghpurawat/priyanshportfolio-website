import { useEffect, useState } from "react";
import { Moon, Sun, Sunset } from "lucide-react";

type Theme = "light" | "dark" | "evening";

const themeCycle: Theme[] = ["light", "evening", "dark"];

const themeIcons: Record<Theme, React.ReactNode> = {
  light: <Sun className="size-4" />,
  evening: <Sunset className="size-4" />,
  dark: <Moon className="size-4" />,
};

const themeLabels: Record<Theme, string> = {
  light: "Switch to evening",
  evening: "Switch to night",
  dark: "Switch to morning",
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const initial: Theme = stored && themeCycle.includes(stored) ? stored : "dark";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const applyTheme = (next: Theme) => {
    const html = document.documentElement;
    html.classList.remove("dark", "evening");
    if (next === "dark") html.classList.add("dark");
    if (next === "evening") html.classList.add("evening");
    localStorage.setItem("theme", next);
  };

  const toggle = () => {
    const nextIndex = (themeCycle.indexOf(theme) + 1) % themeCycle.length;
    const next = themeCycle[nextIndex];
    setTheme(next);
    applyTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={themeLabels[theme]}
      title={themeLabels[theme]}
      className="inline-flex items-center justify-center size-8 rounded-full border border-border hover:bg-accent transition text-muted-foreground hover:text-foreground"
    >
      {themeIcons[theme]}
    </button>
  );
}
