import React from "react";
import { useLocation } from "react-router-dom";

function Welcome() {
  const location = useLocation();
  const name = location.state?.name || "User";

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "Poppins, sans-serif",
      color: "#eaeaea",
      background: "linear-gradient(135deg, #2c5364, #203a43, #0f2027)"
    }}>
      <h1>Welcome {name}</h1>
    </div>
  );
}

export default Welcome;


