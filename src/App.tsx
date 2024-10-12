import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import "./styles/global.scss";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      main: "#4154f1",
    },
    secondary: {
      main: "#717ff5",
    },
    background: {
      default: "#f6f9ff",
    },
  },
});

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`app ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <Header onToggleSidebar={handleToggleSidebar} />
        <div className="content-wrapper">
          <Sidebar isOpen={isSidebarOpen} />
          <main className="content">
            {/* Conținutul principal al dashboard-ului */}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
