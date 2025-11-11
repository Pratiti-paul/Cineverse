import React from "react";
import { useLocation } from "react-router-dom";
import "./Welcome.css";
function Welcome() {
  const location = useLocation();
  const name = location.state?.name || "User";

  return (
    <div className="welcome-container">
        <h1>Welcome {name}</h1>
    </div>
  );
}

export default Welcome;


