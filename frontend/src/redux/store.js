import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleWares = [logger, thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);

export default store;
