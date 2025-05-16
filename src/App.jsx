import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";

export default function App() {
  return (
    <>
      <Header />
      <CardGrid />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
