import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
