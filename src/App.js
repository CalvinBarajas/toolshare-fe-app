// import
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer";
import About from "./components/About";
import Inventory from "./components/Inventory";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <body className="App-header">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/howitworks" element={<HowItWorks />} />
          </Routes>
        </body>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
