import { useState, useEffect } from "react";

import Home from "./Home";

function Splash() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, [loading]);

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
    return <Home />;
  }
}

export default Splash;
