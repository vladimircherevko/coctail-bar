import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { drinksReducer, filtersReducer, errorReducer } from "./reducers";

const rootReducer = combineReducers({
  filters: filtersReducer,
  drinks: drinksReducer,
  error: errorReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
