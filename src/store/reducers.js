import {
  GET_DRINKS,
  GET_FILTERS,
  TOGGLE_FILTER,
  APPLY_FILTERS,
  NEXT_CATEGORY,
  SET_ERROR
} from "./types";

const initialFilterState = {
  filters: [],
  activeFilters: [],
  selectCategoryIndex: -1
};

export const drinksReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DRINKS:
      return [...state, action.payload];
    case APPLY_FILTERS:
      return [];
    default:
      return state;
  }
};

export const filtersReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case GET_FILTERS:
      return {
        filters: action.payload,
        activeFilters: action.payload.map(filter => filter.strCategory),
        selectCategoryIndex: 0
      };
    case TOGGLE_FILTER:
      return {
        ...state,
        filters: state.filters.map(item =>
          item.strCategory === action.payload
            ? { ...item, active: !item.active }
            : item
        )
      };
    case APPLY_FILTERS:
      return {
        ...state,
        activeFilters: [...action.payload],
        selectCategoryIndex: 0
      };
    case NEXT_CATEGORY:
      return {
        ...state,
        selectCategoryIndex:
          state.selectCategoryIndex + 1 === state.activeFilters.length
            ? state.selectCategoryIndex
            : state.selectCategoryIndex + 1
      };
    default:
      return state;
  }
};

export const errorReducer = (state = null, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
};
