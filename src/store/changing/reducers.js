import { ADD_CITY } from "./actions";
import { DEL_CITY } from "./actions";
import { FILTER_CITY } from "./actions";

const defaultState = {
  cards: [0, 172, 1887],
  slider: 5
};

export const addingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        cards:
          state.cards.indexOf(action.payload) === -1
            ? [...state.cards, action.payload]
            : [...state.cards]
      };
    case DEL_CITY:
      return {
        ...state,
        cards: state.cards.filter(item => item !== action.payload)
      };
    case FILTER_CITY:
      return {
        ...state,
        slider: action.payload
      };
    default:
      return state;
  }
};
