import "./index.css";
import {
  baseUrl,
  searchInput,
  cardTemplate,
} from "./../utils/constants.js";
import Api from "../components/Api.js";
import Section from "../components/Section.js";
import GridItem from "../components/GridItem.js";
import Item from "../components/Item.js";

const fileUploadElement = document.querySelector(".upload");
const textContainer = fileUploadElement.querySelector(".upload__text");

const searchButton = document.querySelector(".search__button");
const feed = document.querySelector(".feed__grid");
const randomGif = document.querySelector(".random__wrapper");
const trendLink = document.querySelector(".trend__link");
const randomLink = document.querySelector(".radnom__link");
const searchLink = document.querySelector(".search__link");

const api = new Api({ baseUrl: baseUrl });

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
  return new GridItem(cardItem, cardTemplate).generateCard();
}

function generateItem(gif) {
  return new Item(gif).generateItem();
}

const gifList = new Section(
  {
    renderer: (gif) => {
      const gifCard = generateCard(gif);
      gifList.addItem(gifCard);
    },
  },
  feed
);

const gifItem = new Section(
  {
    renderer: (gif) => {
      const item = generateItem(gif);
      gifItem.addItem(item);
    },
  },
  randomGif
);

function emptyFeed() {
  feed.innerHTML = "";
}

searchButton.addEventListener("click", () => {
  emptyFeed();
  api
    .searchGifs(searchInput.value)
    .then((data) => gifList.renderItems(data))
    .catch((err) => console.log(err));
});

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    emptyFeed();
    event.preventDefault();
    api
      .searchGifs(searchInput.value)
      .then((data) => gifList.renderItems(data))
      .catch((err) => console.log(err));
  }
});

trendLink.addEventListener("click", () => {
  emptyFeed();
  api
    .getTrendingGifs()
    .then((data) => gifList.renderItems(data))
    .catch((err) => console.log(err));
});


randomLink.addEventListener("click", () => {
  emptyFeed();
  api
    .getRandomGif()
    .then((item) => gifItem.renderItem(item))
    .catch((err) => console.log(err));
});

searchLink.addEventListener("click", () => {
  emptyFeed();
});