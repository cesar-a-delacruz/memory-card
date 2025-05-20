import gifFetcher from "./gifFetcher";

let gifs = [];
let randomizedGifs = [];
let placed = [];

export async function fetch() {
  await gifFetcher().then(function (response) {
    gifs = response;
  });
}
export function randomize() {
  if (randomizedGifs.length !== 0) {
    randomizedGifs = [];
    placed = [];
  }
  while (placed.length !== gifs.length) {
    const randomIndex = Math.round(Math.random() * (gifs.length - 1));
    let isPlaced = false;

    for (const index of placed) {
      if (index === randomIndex) {
        isPlaced = true;
        break;
      }
    }
    if (isPlaced) continue;
    else {
      randomizedGifs.push(gifs[randomIndex]);
      placed.push(randomIndex);
    }
  }
  return randomizedGifs;
}
