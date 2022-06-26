import "./index.css";
import {
  baseUrl,
  searchInput,
  cardTemplate,
} from "./../utils/constants.js";
import GifList from "../components/GifList";
import Section from "../components/Section.js";
import Card from "../components/Card.js";

const fileUploadElement = document.querySelector(".upload");
const textContainer = fileUploadElement.querySelector(".upload__text");

const searchButton = document.querySelector(".search__button");
const feed = document.querySelector(".feed__grid");
const trendLink = document.querySelector(".trend__link");
const randomLink = document.querySelector(".radnom__link");
const searchLink = document.querySelector(".search__link");

const gifList = new GifList({ baseUrl: baseUrl });

const fileUpload = () => {
  fileUploadElement.addEventListener("change", (e) => {
    const fileName = e.target.value.split("\\").pop();

    textContainer.textContent = fileName || "Select a file";
  });
};

fileUpload();

const fileReset = () => {
  fileUploadElement
    .querySelector(".upload__button-reset")
    .addEventListener("click", (e) => {
      textContainer.textContent = "Select a file";
      fileUploadElement.querySelector(".upload__input").value = "";
    });
};

fileReset();

function generateCard(cardItem) {
  return new Card(cardItem, cardTemplate).generateCard();
}

const cardList = new Section(
  {
    renderer: (cardItem) => {
      const card = generateCard(cardItem);
      cardList.addItem(card);
    },
  },
  feed
);

function emptyFeed() {
  feed.innerHTML = "";
}

searchButton.addEventListener("click", () => {
  emptyFeed();
  gifList
    .searchGifs(searchInput.value)
    .then((data) => cardList.renderItems(data))
    .catch((err) => console.log(err));
});

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    emptyFeed();
    event.preventDefault();
    gifList
      .searchGifs(searchInput.value)
      .then((data) => cardList.renderItems(data))
      .catch((err) => console.log(err));
  }
});

trendLink.addEventListener("click", () => {
  emptyFeed();
  gifList
    .getTrendingGifs()
    .then((data) => cardList.renderItems(data))
    .catch((err) => console.log(err));
});


randomLink.addEventListener("click", () => {
  emptyFeed();
  gifList
    .getRandomGif()
    .then((item) => cardList.renderItem(item))
    .catch((err) => console.log(err));
});

searchLink.addEventListener("click", () => {
  emptyFeed();
});