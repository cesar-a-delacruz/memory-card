import "../styles/CardGrid.css";
import { useEffect, useState } from "react";
import * as gifHandler from "../data/gifHandler";
import Card from "./Card";

export default function CardGrid({ raiseScore }) {
  const [gifs, setGifs] = useState([]);
  const cards = [];

  useEffect(() => {
    gifHandler.fetch().then(function () {
      setGifs(gifHandler.randomize());
    });
  }, []);

  for (let i = 0; i < gifs.length; i++) {
    cards[i] = (
      <Card
        key={gifs[i].id}
        gifURL={gifs[i].images.original.url}
        title={gifs[i].title}
        randomizeGifs={randomizeGifs}
      />
    );
  }

  return <div id="card-grid">{cards.map((card) => card)}</div>;

  function randomizeGifs() {
    setGifs(gifHandler.randomize());
    raiseScore();
  }
}
