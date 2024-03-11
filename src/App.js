import "./App.css";
import MainNavigation from "./shared/MainNavigation";
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import ContactForm from "./components/Contact1";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
          
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<ContactForm/>} />
          <Route exact path="/projects" element={<Project/>} />
          <Route exact path="/" element={<Home/> } />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
