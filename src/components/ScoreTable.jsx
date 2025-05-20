import "../styles/ScoreTable.css";
export default function ScoreTable({scores}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Score</th>
          <th>Best Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{scores.score}</td>
          <td>{scores.bestScore}</td>
        </tr>
      </tbody>
    </table>
  );
}
