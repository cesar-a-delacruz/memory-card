import "../styles/Card.css";
export default function Card({ gifURL, title, randomizeGifs }) {
  return (
    <div className="card" onClick={() => randomizeGifs()}>
      <img src={gifURL} alt={title} />
      <p>{title}</p>
    </div>
  );
}
