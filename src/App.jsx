import Container from "./Container.jsx"
import { ThemeContextProvider } from "./themeContext.jsx"

export default function App() {

  return (
    <>
      <ThemeContextProvider>
        <Container />
      </ThemeContextProvider>
    </>
  )
}