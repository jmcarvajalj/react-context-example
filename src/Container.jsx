import { useContext } from "react"
import Body from "./Body.jsx"
import Button from "./Button.jsx"
import { ThemeContext } from "./themeContext.jsx"

export default function Container() {

    const { color } = useContext(ThemeContext)

    return (
        <div className={`${color}-theme`}>
            <Body />
            <Button />
        </div>
    )
}