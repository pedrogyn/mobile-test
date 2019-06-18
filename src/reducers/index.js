import { combineReducers } from "redux";

import TableReducer from "./TableReducer";
import InformationReducer from "./InformationReducer";

const rootReducer = combineReducers({
  TableReducer,
  InformationReducer
});

export default rootReducer;
