import "../styles/CardGrid.css";
import { useEffect, useState } from "react";
import gifFetcher from "../data/gifFetcher";
import Card from "./Card";

export default function CardGrid() {
  const [gifs, setGifs] = useState([]);
  const cards = [];

  useEffect(() => {
    gifFetcher().then(function (response) {
      setGifs(response);
    });
  }, []);

  for (let i = 0; i < gifs.length; i++) {
    cards[i] = (
      <Card
        key={gifs[i].id}
        gifURL={gifs[i].images.original.url}
        title={gifs[i].title}
      />
    );
  }

  return <div id="card-grid">{cards.map((card) => card)}</div>;
}
