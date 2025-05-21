import "../styles/CardGrid.css";
import { useEffect, useState } from "react";
import * as gifHandler from "../data/gifHandler";
import Card from "./Card";

export default function CardGrid({ raiseScore, resetScore }) {
  const [cardsData, setCardsData] = useState({ gifs: [], clicked: [] });
  const cards = [];

  useEffect(() => {
    gifHandler.fetch().then(function () {
      setCardsData({ ...cardsData, gifs: gifHandler.randomize() });
    });
  }, []);

  for (let i = 0; i < cardsData.gifs.length; i++) {
    cards[i] = (
      <Card
        key={cardsData.gifs[i].id}
        id={cardsData.gifs[i].id}
        gifURL={cardsData.gifs[i].images.original.url}
        title={cardsData.gifs[i].title}
        randomizeGifs={randomizeGifs}
      />
    );
  }

  return <div id="card-grid">{cards.map((card) => card)}</div>;

  function randomizeGifs(id) {
    if (doubleClicked(id)) return;
    setCardsData({
      gifs: gifHandler.randomize(),
      clicked: [...cardsData.clicked, id],
    });
    raiseScore();
  }
  function doubleClicked(id) {
    for (const item of cardsData.clicked) {
      if (item === id) {
        resetScore();
        setCardsData({ gifs: gifHandler.randomize(), clicked: [] });
        return true;
      }
    }
    return false;
  }
}
