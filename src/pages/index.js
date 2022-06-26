import "./index.css";
import {
  configApi,
  searchInput,
  cardTemplate,
  configTabs,
  configAddForm,
  configValidation,
  searchButton,
  feed,
  trends,
  randomGif
} from "../utils/constants.js";

import Api from "../components/Api.js";
import Section from "../components/Section.js";
import GridItem from "../components/GridItem.js";
import Item from "../components/Item.js";
import Tabs from '../components/Tabs.js';
import Form from "../components/Form.js";
import FormValidator from "../components/FormValidator.js";

const api = new Api(configApi);

const formAddCard = new Form(
  configAddForm,
  (data) => {
    formAddCard.setLoading(true);
    api.addGif(data)
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
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(configValidation);

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

const trendsList = new Section(
  {
    renderer: (gif) => {
      const gifCard = generateCard(gif);
      trendsList.addItem(gifCard);
    },
  },
  trends
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

const tabs = new Tabs(
  configTabs,
  (indexTab) => {
    switch(++indexTab) {
      case 2:
        api
          .getTrendingGifs()
          .then((data) => {
            trendsList.renderItems(data);
          })
          .catch((err) => console.log(err));
        break
      case 3:
        api
          .getRandomGif()
          .then((item) => gifItem.renderItem(item))
          .catch((err) => console.log(err));
        break
    }
  });

tabs.setEventListener();

const emptyFeed = () => {
  feed.innerHTML = "";
}

const renderSearchItems = () => {
  emptyFeed();
  api
    .searchGifs(searchInput.value)
    .then((data) => gifList.renderItems(data))
    .catch((err) => console.log(err));
}

searchButton.addEventListener("click", () => {
  renderSearchItems();
});

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    renderSearchItems();
  }
});
