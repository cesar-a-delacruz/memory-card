import { useEffect, useState } from "react";
import gifFetcher from "../data/gifFetcher";
import Card from "./Card";
export default function CardGrid() {
  const [gifs, setGifs] = useState([]);
  const cards = [];

  useEffect(() => {
    setGifs(gifFetcher());
  });

  for (let i = 0; i < gifs.length; i++) {
    console.log(gifs);
    cards[i] = <Card key={gifs[i].id} gifURL={gifs[i].images.original.url} title={gifs[i].title} />;
  }
  
  return <div id="card-grid">{cards.map((card) => card)}</div>;
}
