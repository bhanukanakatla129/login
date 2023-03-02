import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Service from "./Service";

function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Service" element={<Service/>}/>

      </Routes>
    </>
    );
}

export default App;
