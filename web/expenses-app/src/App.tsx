import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Report from "./pages/Report";
import NotFound from "./pages/NotFound";
import AppLayout from "./components/layout/AppLayout";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
