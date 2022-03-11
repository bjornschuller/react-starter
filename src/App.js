import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
      <Router>
          <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          {/* for any route mismatch redirect to home */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
  );
}

export default App;
