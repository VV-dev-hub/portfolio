// src/App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Intro from "./sections/Intro/Intro";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Technologies from "./sections/Technologies/Technologies";
import Contact from "./sections/Contact/Contact";
import Footer from "./layouts/Footer/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Intro />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Router>
  );
}
