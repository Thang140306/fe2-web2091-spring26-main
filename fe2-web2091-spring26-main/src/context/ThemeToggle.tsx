import { createContext, useState } from "react";

export const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: any) {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}