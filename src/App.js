import { Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Works from "./pages/Works";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="*" element={<Home />} />
        <Route path="/#*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
