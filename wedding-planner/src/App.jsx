import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./components/Onboarding";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
