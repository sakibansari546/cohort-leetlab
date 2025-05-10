import { Route, Routes } from "react-router-dom";

// Components
import Theme from "./pages/Theme";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="theme" element={<Theme />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
