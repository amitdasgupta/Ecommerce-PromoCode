import { combineReducers } from "redux";
import promoReducer from "./reducers";

export default combineReducers({
  promoCode: promoReducer
});
