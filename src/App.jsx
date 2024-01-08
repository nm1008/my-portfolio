import "./App.css";
import Header from "./Header/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import { DarkModeProvider } from "./Hooks/ThemeContext";
import Project from "./pages/Project";

function App() {
  return (
    <DarkModeProvider>
      <Header />
      <Home />
      <About />
      <Project />
    </DarkModeProvider>
  );
}

export default App;
