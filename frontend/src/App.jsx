import { Navigate, Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";

// Components
import Theme from "./pages/Theme";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFound";
import Home from "./pages/Home";
import LoginAndSignup from "./pages/LoginAndSignup";
import { ToastContainer } from "react-toastify";

const ProtectedRoutes = ({ children }) => {
  const { user, accessToken } = useSelector((state) => state.auth);
  if (!user || !accessToken) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div data-theme={theme}>
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/login" element={<LoginAndSignup type="login" />} />
        <Route path="/signup" element={<LoginAndSignup type="signup" />} />

        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Navbar />
            </ProtectedRoutes>
          }
        >
          <Route
            index
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="theme" element={<Theme />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
