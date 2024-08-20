import React from "react";
import Auth from "./components/Auth";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className='App'>
        <ThemeToggle />
        <Auth />
      </div>
    </ThemeProvider>
  );
};

export default App;
