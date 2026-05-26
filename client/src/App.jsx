import { HashRouter, Routes, Route } from "react-router-dom";
import { ScrollToHash } from "./components/ScrollToHash"
import "./App.css";
import "./adaptive.css";
import './pages/admin.css'

import { MainPage } from "./pages/MainPage/MainPage";
import { QuestionBank } from "./pages/QuestionBank/QuestionBank";
import { MathTest } from "./pages/QuestionBank/Tests/MathTest";
import { ReadingTest } from "./pages/QuestionBank/Tests/ReadingTest";
import { Login } from "./pages/LoginPage/Login";
import { LMS } from "./pages/LMS/LMS";

function App() {
  return (
    <HashRouter >
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/questionBank" element={<QuestionBank />} />
        <Route path="/mathTest" element={<MathTest />} />
        <Route path="/readingTest" element={<ReadingTest />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lms" element={<LMS/>} />

      </Routes>
    </HashRouter>
  );
}

export default App;
