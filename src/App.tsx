import { Routes, Route, Navigate } from "react-router-dom";
import Assignment1 from "./assignments/assignment1/Assignment1";
import Assignment2 from "./assignments/assignment2/Assignment2";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/assignment-1" replace />} />
      <Route path="/assignment-1" element={<Assignment1 />} />
      <Route path="/assignment-2" element={<Assignment2 />} />
    </Routes>
  );
};

export default App;
