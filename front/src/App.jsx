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
import SubmissionPage from "./pages/SubmissionPage";

import AdminPage from "./pages/admin/AdminPage";
import AdminSidebar from "./components/admin/Siadebar";
import CreateProblemPage from "./pages/admin/CreateProblemPage";
import UsersPage from "./pages/admin/UsersPage";
import SubmissionsPage from "./pages/admin/SubmissionsPage";
import AdminPlaylistsPage from "./pages/admin/PlaylistsPage";
import AdminProblemsPage from "./pages/admin/ProblemsPage";
import AboutPage from "./pages/AboutPage";
import SheetPage from "./pages/sheet/SheetPage";

function App() {
  const { theme } = useThemeStore();
  const { data, isLoading, isError, error } = useGetUserQuery({
    onError: (err) => {
      console.log(err);
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
        <ToastContainer theme={theme} position="bottom-right" />
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
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Sheet */}
            <Route
              path="/sheets/:sheetId"
              element={user ? <SheetPage /> : <Navigate to="/login" />}
            />

            {/* Admin */}
            <Route
              path="/admin/"
              element={
                user && user?.role === "ADMIN" ? (
                  <AdminSidebar />
                ) : (
                  <Navigate to="/" />
                )
              }
            >
              <Route
                index
                element={
                  user && user?.role === "ADMIN" ? (
                    <AdminPage />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route
                path="create-problem"
                element={
                  user && user?.role === "ADMIN" ? (
                    <CreateProblemPage />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="users"
                element={
                  user && user?.role === "ADMIN" ? (
                    <UsersPage />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="problems"
                element={
                  user && user?.role === "ADMIN" ? (
                    <AdminProblemsPage />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="playlists"
                element={
                  user && user?.role === "ADMIN" ? (
                    <AdminPlaylistsPage />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="submissions"
                element={
                  user && user?.role === "ADMIN" ? (
                    <SubmissionsPage />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
            </Route>

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

            <Route
              path="/submissions/:submissionId"
              element={user ? <SubmissionPage /> : <Navigate to="/login" />}
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
