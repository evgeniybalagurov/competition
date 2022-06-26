export const KEY = "l6r7lzQX38ULq1n292LLpWHwUU4iNOWC";
export const baseUrl = `https://api.giphy.com/v1/`;
export const searchUrl = "gifs/search";
export const trendingUrl = "gifs/trending";
export const randomUrl = "gifs/random";
export const apiKey = `?api_key=${KEY}`;
export const limit = `&limit=20`;
export const query = `&q=`

export const searchInput = document.querySelector('input[type="search"]');

export const cardTemplate = document
  .querySelector("#grid-template")
  .content.querySelector(".grid");

