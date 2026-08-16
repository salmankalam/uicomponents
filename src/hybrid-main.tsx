import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppHybrid from "./App-hybrid";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppHybrid />
  </StrictMode>,
);
