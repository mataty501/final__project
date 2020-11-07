import { ADD_CART } from "../Actions/actions";

const initialState = { add_cart:  [] };

const counterReducerAdd = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return { add_cart: [...state.add_cart , action.payload] };
    default:
      return state;
  }
};

export default counterReducerAdd;