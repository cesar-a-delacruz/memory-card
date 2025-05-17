export default function Card({gifURL, title}) {
  return (
    <div className="card">
      <img src={gifURL} alt={title} />
      <p>{title}</p>
    </div>
  );
}
