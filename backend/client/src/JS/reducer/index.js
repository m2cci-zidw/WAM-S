import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import { postReducer } from "./postReducer";
import userReducer from "./user";
const rootReducer = combineReducers({ userReducer,contactReducer, postReducer });
export default rootReducer;