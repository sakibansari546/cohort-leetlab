import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import LoginAndSignup from "./pages/LoginAndSignup";
import Home from "./pages/Home";
import Theme from "./pages/Theme";
import NotFoundPage from "./pages/NotFound";

import Navbar from "./components/Navbar";
import { useThemeStore } from "./store/themeStore";

function App() {
  const { theme } = useThemeStore();
  return (
    <>
      <div data-theme={theme}>
        <ToastContainer position="bottom-right" />
        <Routes>
          <Route path="/login" element={<LoginAndSignup type="login" />} />
          <Route path="/signup" element={<LoginAndSignup type="signup" />} />

          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="theme" element={<Theme />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
