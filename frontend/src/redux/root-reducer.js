import { combineReducers } from "redux";
import alert from "./alert";
import movies from "./movies";

export default combineReducers({
    alertState : alert,
    movieState:  movies
});
