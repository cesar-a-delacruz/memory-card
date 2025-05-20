const API_KEY = "51Ef8FgIdJoJftC9hzrB5l0uoFsqUgoi";
const SEARCH_TERM = "exotic+car";
const RESULTS_AMMOUNT = "12";
const GIPHY_URL =
  "https://api.giphy.com/v1/gifs/search?" +
  `api_key=${API_KEY}&q=${SEARCH_TERM}&limit=${RESULTS_AMMOUNT}&` +
  "offset=0&rating=g&lang=en&bundle=messaging_non_clips";

export default async function gifFetcher() {
  let gifs = [];
  await fetch(GIPHY_URL, { mode: "cors" })
    .then(function (response) {
      if (!response.ok)
        throw new Error(`${response.meta.status}, ${response.meta.msg}`);
      else return response.json();
    })
    .then(function (response) {
      gifs = response.data;
      return;
    })
    .catch(function (error) {
      alert(error);
    });
  return gifs;
}
