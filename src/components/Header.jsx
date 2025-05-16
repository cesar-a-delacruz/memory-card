import ScoreTable from "./ScoreTable";
export default function Header() {
  return (
    <div id="header">
      <div className="main-text">
        <h1>Memory Card Game</h1>
        <p>Get points by clicking on an gif only once</p>
      </div>
      <ScoreTable />
    </div>
  );
}
