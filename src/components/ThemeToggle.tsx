'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
<button
  onClick={() => setTheme(isDark ? "light" : "dark")}
  className="
    p-2 rounded-xl cursor-pointer
    transition
  "
  aria-label="Toggle theme"
>
  {isDark ? (
    <Sun className="w-5 h-5 text-yellow-400" />
  ) : (
    <Moon className="w-5 h-5 text-blue-600" />
  )}
</button>
  );
}