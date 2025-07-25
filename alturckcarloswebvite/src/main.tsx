import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
