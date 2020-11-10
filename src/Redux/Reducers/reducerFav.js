//import { ADD_CART } from "../Actions/counterActions";
import { ADD_FAV } from "../Actions/actions";

const initialState = { fav: [] };

const counterReducerFav = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      initialState.forEach((e) => {
        if (e.name !== payload.name) {
          return { fav: [...state.fav, action.payload] };
        }
        else {
          return { fav: [...state.fav] }
        }
      })

    default:
      return state;
  }
};

export default counterReducerFav;
