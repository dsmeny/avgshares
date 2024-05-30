import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalcAvgPage from "./pages/CalcAvgPage";
import WelcomePage from "./pages/WelcomePage";
import Sidebar from "./components/Sidebar";
import CalendarPage from "./pages/CalendarPage";
import PrivateNotesPage from "./pages/PrivateNotesPage";
import { FiAlignJustify } from "react-icons/fi";
import "./App.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  function clickHandler(e) {
    setShowSidebar((showbar) => !showbar);
  }

  return (
    <div className="container">
      <Router>
        {showSidebar ? (
          <Sidebar clickHandler={clickHandler} />
        ) : (
          <FiAlignJustify style={styles.menu} onClick={() => clickHandler()} />
        )}
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/avg" element={<CalcAvgPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/private-notes" element={<PrivateNotesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

const styles = {
  menu: {
    position: "absolute",
    zIndex: "999",
    left: "5px",
    top: "5px",
    fontSize: "2rem",
  },
};

export default App;
