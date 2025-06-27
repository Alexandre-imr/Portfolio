import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css"; // 1. Carrega a base do Tailwind
import "./App.css"; // 2. Carrega o tema do ShadCN por cima

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
