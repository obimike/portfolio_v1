import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Portfolio from "./Portfolio";
import Home from "./Home";

function Splash() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen">
        <div className="m-auto">
          <p className="anim">
            Sa<span className="text-primary">m</span>iie
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Home />} />
        <Route path="/#*" element={<Home />} />
      </Routes>
    );
  }
}

export default Splash;
