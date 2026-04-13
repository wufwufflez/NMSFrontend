import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // ✅ IMPORTANT

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ THIS FIXES YOUR ERROR */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);