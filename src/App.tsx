import { Route, Routes } from "react-router-dom";
import LandingPage from "./v2/pages/Landing/LandingPage";
import TechNotesPage from "./v2/pages/TechNotes/TechNotesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/tech-notes" element={<TechNotesPage />} />
    </Routes>
  );
}

export default App;
