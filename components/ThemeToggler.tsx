"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <div>
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full  text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300"
                aria-label="Toggle theme"
            >
                {mounted &&
                    (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
            </button>
        </div>
    );
};

export default ThemeToggler;
