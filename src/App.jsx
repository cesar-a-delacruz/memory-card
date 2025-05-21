import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";

export default function App() {
  const [scores, setScores] = useState({ score: 0, bestScore: 0 });
  return (
    <>
      <Header scores={scores} />
      <CardGrid raiseScore={raiseScore} resetScore={resetScore} />
    </>
  );

  function raiseScore() {
    setScores({ ...scores, score: scores.score + 1 });
  }
  function resetScore() {
    if (scores.bestScore < scores.score)
      setScores({ score: 0, bestScore: scores.score });
    else setScores({ ...scores, score: 0 });
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
