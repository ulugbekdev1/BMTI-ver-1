import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Foter from './components/Foter';
import Carousel from './components/Carousel';
import Advantage from './components/Advantage';
import Main from './components/Main';
import Main2 from './components/Main2';
import Main3 from './components/Main3';
import Main4 from './components/Main4';
import News from './components/News';
import Teacher from "./components/Teacher";

// Home sahifa
function HomePage() {
  return (
    <>
      <div className="overflow-hidden">
        <Carousel />
      </div>
      <Advantage />
      <Main />
      <Main2 />
      <Main3 />
      <Main4 />
    </>
  );
}

// Yangiliklar sahifasi
function NewsPage() {
  return (
    <div className="p-6 mt-12">
      <News />
    </div>
  );
}

// O'qituvchilar sahifasi
function TeacherPage() {
  return (
    <div className="p-6 mt-12">
      <Teacher />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
      </Routes>
      <Foter />
    </Router>
  );
}

export default App;
