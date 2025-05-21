import "../styles/Card.css";
export default function Card({ id, gifURL, title, randomizeGifs }) {
  return (
    <div className="card" onClick={() => randomizeGifs(id)}>
      <img src={gifURL} alt={title} />
      <p>{title}</p>
    </div>
  );
}
