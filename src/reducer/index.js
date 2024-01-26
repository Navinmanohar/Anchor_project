import { combineReducers } from "redux";
import authReducer from "./AtuhReducer";
import postReducer from "./PostReducer"; // Make sure to import postReducer

export const reducers = combineReducers({
     authReducer,postReducer
});
