import { MAXMIN } from "../Actions/actions";

const initialState = { min: "", max: "" };

const reducerMaxMin = (state = initialState, action) => {
    switch (action.type) {
        case MAXMIN:

            const max = action.payload.max

            const min = action.payload.min

            return { min: min, max: max }
        default:
            return state;
    }
};

export default reducerMaxMin;