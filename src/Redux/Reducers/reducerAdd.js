import { ADD_CART, REMOVE_CART } from "../Actions/actions";

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
    case REMOVE_CART:
      const newCart = state.cart.filter((elem) => elem.id !== action.payload.id)
      return { cart: [...newCart] };
    default:
      return state;
  }
};

export default reducerAdd;