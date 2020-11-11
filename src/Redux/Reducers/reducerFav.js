//import { ADD_CART } from "../Actions/counterActions";
import { ADD_FAV } from "../Actions/actions";

const initialState = { fav: [] };

const reducerFav = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      const res = state.fav.find((elem) => elem.id == action.payload.id)

      if (res === undefined) {
        return { fav: [...state.fav, action.payload] };
      }
      else {
        return { fav: [...state.fav] }
      }
    default:
      return state;
  }
};

export default reducerFav;
