"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"

export function ModeToggle(){
    const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light")
 
  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "theme-light")
  }, [])
 
  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  function toggleTheme(){
    if(theme === "dark"){
        setThemeState("theme-light")
    }else{
        setThemeState("dark")
    }
  }

    return(
        <button onClick={toggleTheme} className="cursor-pointer">
            {theme === "dark"?<Moon/>:<Sun/>}
        </button>
    )
}