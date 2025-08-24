import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/elements/ScrollToTop";
import Home from "/src/pages/Home";
import About from "/src/pages/About";
import Services from "/src/pages/Services";
import Contact from "/src/pages/Contact";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}


