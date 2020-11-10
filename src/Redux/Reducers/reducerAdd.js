import { ADD_CART } from "../Actions/actions";

const initialState = { cart: [] };

const counterReducerAdd = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return { add_cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

export default counterReducerAdd;