import { ADD_CITY, DEL_CITY, FILTER_CITY } from "./actions";
import rus from "../../static/rus";
import Swal from "sweetalert2";

const defaultState = {
  cards: [0, 172, 1886],
  slider: 5,
  empty: true,
  double: false
};

export const cardsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        cards:
          state.cards.indexOf(action.payload) === -1
            ? [...state.cards, action.payload]
            : [...state.cards],
        double:
          state.cards.indexOf(action.payload) !== -1
            ? Swal.fire("Город уже добавлен или не попадает в фильтр")
            : ""
      };
    case DEL_CITY:
      return {
        ...state,
        cards: state.cards.filter(item => item !== action.payload)
      };
    case FILTER_CITY:
      return {
        ...state,
        slider: action.payload,
        empty: state.cards.some(item => {
          return rus[item]["temp"] > action.payload;
        })
      };
    default:
      return state;
  }
};
