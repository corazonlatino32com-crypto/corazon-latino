import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 40 }}>
      <h1>Corazón Latino</h1>
      <p>Tienda funcionando ✔️</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
