//import { ADD_CART } from "../Actions/counterActions";
import { SHOWADDBTN } from "../Actions/actions";

const initialState = { showBtn: false };

const reducerUser = (state = initialState, action) => {
    switch (action.type) {
        case SHOWADDBTN:
            state['showBtn'] = true
        default:
            return state;
    }
};

export default reducerUser;
