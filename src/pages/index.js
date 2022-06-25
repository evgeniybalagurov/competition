import "./index.css";
import {
  KEY,
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

const gifList = new GifList({ baseUrl: baseUrl });

// const fileUpload = () => {
//   fileUploadElement.addEventListener("change", (e) => {
//     const fileName = e.target.value.split("\\").pop();

//     textContainer.textContent = fileName || "Select a file";
//   });
// };

// fileUpload();

// const fileReset = () => {
//   fileUploadElement
//     .querySelector(".upload__button-reset")
//     .addEventListener("click", (e) => {
//       textContainer.textContent = "Select a file";
//       fileUploadElement.querySelector(".upload__input").value = "";
//     });
// };

// fileReset();

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

searchButton.addEventListener("click", () => {
  gifList
    .getGifs(searchInput.value)
    .then((data) => cardList.renderItems(data))
    .catch((err) => console.log(err));
});

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    gifList
      .getGifs(searchInput.value)
      .then((data) => cardList.renderItems(data))
      .catch((err) => console.log(err));
  }
});
