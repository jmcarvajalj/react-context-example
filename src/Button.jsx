import { useContext } from "react"
import { ThemeContext } from "./themeContext.jsx"

export default function Button() {

    const { color, toggleTheme } = useContext(ThemeContext)

    return (
        <button onClick={toggleTheme} className={`${color}-theme button-toggle-${color}`}>Change to {color === "dark" ? "light" : "dark"} theme</button>
    )
}