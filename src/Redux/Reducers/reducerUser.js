//import { ADD_CART } from "../Actions/counterActions";
import { SHOWADDBTN, ROLE } from "../Actions/actions";

const initialState = { showBtn: false, admin: false };

const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case SHOWADDBTN:
      return { ...state, showBtn: true };
    case ROLE:
      return { ...state, admin: true };
    default:
      return state;
  }
};

export default reducerUser;
