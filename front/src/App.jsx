import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LoginAndSignup from "./pages/LoginAndSignup";
import Home from "./pages/Home";
import Theme from "./pages/Theme";
import NotFoundPage from "./pages/NotFound";
import VerifyEmail from "./pages/VerifyEmail";
import ProblemsPage from "./pages/ProblemsPage";
import ProblemPage from "./pages/ProblemPage";
import PlaylistsPage from "./pages/PlaylistsPage";

import Navbar from "./components/Navbar";

import { useThemeStore } from "./store/themeStore";
import { useGetUserQuery } from "./querys/useUserQuery";
import UserProfilePage from "./pages/UserProfilePage";
import UserDashboardPage from "./pages/UserDashboardPage";

function App() {
  const { theme } = useThemeStore();
  const { data, isLoading } = useGetUserQuery({
    onError: (err) => {
      if (err.response?.status === 401) {
        window.location.href = "/login";
      }
    },
  });
  const user = data?.user;

  if (isLoading) {
    return (
      <div className="w-full flex items-center flex-col justify-center h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <>
      <div data-theme={theme} className="max-w-[2000px] mx-auto min-h-00px]">
        <ToastContainer position="bottom-right" />
        <Routes>
          <Route
            path="/login"
            element={
              !user ? <LoginAndSignup type="login" /> : <Navigate to="/" />
            }
          />
          <Route
            path="/signup"
            element={
              !user ? <LoginAndSignup type="signup" /> : <Navigate to="/" />
            }
          />
          <Route
            path="/verify-email"
            element={!user ? <VerifyEmail /> : <Navigate to="/" />}
          />

          <Route
            path="/"
            element={user ? <Navbar /> : <Navigate to="/login" />}
          >
            <Route index element={user ? <Home /> : <Navigate to="/login" />} />

            <Route
              path="/profile"
              element={user ? <UserProfilePage /> : <Navigate to="/login" />}
            />
            <Route
              path="/dashboard"
              element={user ? <UserDashboardPage /> : <Navigate to="/login" />}
            />

            <Route
              path="/problems"
              element={user ? <ProblemsPage /> : <Navigate to="/login" />}
            />

            <Route
              path="/playlists/:playlistId"
              element={user ? <PlaylistsPage /> : <Navigate to="/login" />}
            />
            <Route path="theme" element={<Theme />} />
          </Route>
          <Route
            path="/problems/:problemId"
            element={user ? <ProblemPage /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
