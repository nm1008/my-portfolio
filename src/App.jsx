import "./App.css";
import Header from "./Header/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import { DarkModeProvider } from "./Hooks/ThemeContext";

function App() {
  return (
    <DarkModeProvider>
      <Header />
      <Home />
      <About />
    </DarkModeProvider>
  );
}

export default App;
