import "./App.css";
import Header from "./Header/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import { DarkModeProvider } from "./Hooks/ThemeContext";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

function App() {
  return (
    <DarkModeProvider>
      <Header />
      <Home />
      <About />
      <Project />
      <Skills />
    </DarkModeProvider>
  );
}

export default App;
