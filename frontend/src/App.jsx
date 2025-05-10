import { Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";

// Components
import Theme from "./pages/Theme";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFound";

function App() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div data-theme={theme}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="theme" element={<Theme />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
