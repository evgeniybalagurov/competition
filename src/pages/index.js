import "./index.css";

import Tabs from '../components/Tabs.js';
import Api from '../components/Api.js';
import Form from "../components/Form.js";

import {
  configTabs,
  configAddForm,
  uploadUrl,
  apiKey
} from '../utils/constants.js';


const tabs = new Tabs(configTabs);

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