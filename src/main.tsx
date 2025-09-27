import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./ui/components/App/App";
import "@fontsource/rubik-distressed/index.css";
import "@fontsource-variable/josefin-sans/index.css";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.log("oli");
