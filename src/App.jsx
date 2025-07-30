<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Nav from "./Components/Nav";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
=======
import Home from './Pages/Home'
import FloatBtn from "./Components/FloatBtn"

function App() {
 

  return (
    <>
      <FloatBtn />
      <Home />
    </>
  )
}

export default App
>>>>>>> fb34473d7420cb42a1446fa4532ca99974e0fcb1
