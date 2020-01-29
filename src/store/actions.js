import { bootstrap } from "../bootstrap";
import {
  GET_FILTERS,
  TOGGLE_FILTER,
  GET_DRINKS,
  APPLY_FILTERS,
  NEXT_CATEGORY,
  SET_ERROR
} from "./types";
import { DBURLS } from "../dbUrls";

export const getFilters = () => async dispatch => {
  try {
    const data = await bootstrap(DBURLS.filter);
    if (!data.length) throw new Error("Empty filters list");
    dispatch({
      type: GET_FILTERS,
      payload: data.map(item => ({ ...item, active: true }))
    });
  } catch (err) {
    dispatch(setError(err.message));
  }
};

export const getDrinks = category => async dispatch => {
  try {
    const data = await bootstrap(DBURLS.drink + category);
    if (!data.length) throw new Error("Empty drinks list");
    dispatch({
      type: GET_DRINKS,
      payload: { title: category, data }
    });
  } catch (err) {
    dispatch(setError(err.message));
  }
};

export const toggleFilter = filter => ({
  type: TOGGLE_FILTER,
  payload: filter.strCategory
});

export const applyFilters = arr => ({
  type: APPLY_FILTERS,
  payload: arr
});

export const nextCategory = () => ({
  type: NEXT_CATEGORY
});

export const setError = err => ({
  type: SET_ERROR,
  payload: err || "Unknown error"
});
