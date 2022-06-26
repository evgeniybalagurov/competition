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

// const fileUpload = () => {
//   fileUploadElement.addEventListener("change", (e) => {
//     const fileName = e.target.value.split("\\").pop();

//     textContainer.textContent = fileName || "Select a file";
//   });
// };

import Tabs from '../components/Tabs.js';
import Api from '../components/Api.js';
import Form from "../components/Form.js";
import FormValidator from "../components/FormValidator.js";

import {
  configTabs,
  configAddForm,
  configValidation,
  uploadUrl,
  apiKey
} from '../utils/constants.js';


const tabs = new Tabs(
  configTabs,
  (indexTab) => {
    switch(++indexTab) {
      case 1:
        console.log(indexTab);
        break
      case 2:
        console.log(indexTab);
        break
      case 3:
        console.log(indexTab);
        break
      case 4:
        console.log(indexTab);
        break
      // default:

      //   break
    }
    // console.log(indexTab);
  });

tabs.setEventListener();


const api = new Api(uploadUrl, apiKey);

const formAddCard = new Form(
  configAddForm,
  (data) => {
    formAddCard.setLoading(true);
    api.addCard(data)
      .catch(err => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        formAddCard.setLoading(false);
      })
  }
);

formAddCard.setEventListener();


const formValidators = {}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    const validator = new FormValidator(configValidation, formElement);
    const formName = formElement.getAttribute('name');

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

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(configValidation);
