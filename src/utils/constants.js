export const KEY = "l6r7lzQX38ULq1n292LLpWHwUU4iNOWC";
export const baseUrl = `https://api.giphy.com/v1/`;
export const searchUrl = "gifs/search";
export const trendingUrl = "gifs/trending";
export const apiKey = `?api_key=${KEY}`;
export const limit = `&limit=10`;
export const query = `&q=`

export const searchInput = document.querySelector('input[type="search"]');

export const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

