import { combineReducers } from "redux";
import alert from "./alert";
import movies from "./movies";
import auth from "./auth";

export default combineReducers({
  alertState: alert,
  movieState: movies,
  authState: auth,
});
