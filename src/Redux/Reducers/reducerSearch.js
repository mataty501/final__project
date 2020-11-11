import { SEARCH } from "../Actions/actions";

const initialState = { search: [] };

const reducerSearch = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return { search: [action.payload] };
        default:
            return state;
    }
};

export default reducerSearch;