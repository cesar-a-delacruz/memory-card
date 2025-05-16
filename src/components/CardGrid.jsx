import Card from "./Card";
export default function CardGrid() {
  const cards = [];
  for (let i = 0; i < 15; i++) {
    cards[i] = <Card key={i} />;
  }
  return <div id="card-grid">{cards.map((card) => card)}</div>;
}
