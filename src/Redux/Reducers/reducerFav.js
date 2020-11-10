//import { ADD_CART } from "../Actions/counterActions";
import { ADD_FAV } from "../Actions/actions";

const initialState = { fav: [] };

const counterReducerFav = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { fav: [...state.fav, action.payload] };
    default:
      return state;
  }
};

export default counterReducerFav;
