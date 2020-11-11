import { ADD_CART } from "../Actions/actions";

const initialState = { cart: [] };

const reducerAdd = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:

      const res = state.cart.find((elem) => elem.id == action.payload.id)

      if (res === undefined) {
        return { cart: [...state.cart, action.payload] };
      }
      else {
        return { cart: [...state.cart] }
      }
    default:
      return state;
  }
};

export default reducerAdd;