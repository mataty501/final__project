import { SEARCH, GENDER, PRICE } from "../Actions/actions";

// const initialState = { search: [] };


const initialState = { search: "", gender: "", price: [0, 5000] };
const reducerFilter = (state = initialState, action) => {

    switch (action.type) {/*
        case SEARCH:
            return { price: [action.payload], search: [action.payload], gender: [action.payload] };
        case GENDER:
            return { price: [action.payload], search: [action.payload], gender: [action.payload] };
        case PRICE:
            return { price: [action.payload], search: [action.payload], gender: [action.payload] };
        default:
            return state;
        */
        case SEARCH:
            return { ...state, search: action.payload.search };
        case GENDER:
            return { ...state, gender: action.payload };
        case PRICE:

            return { ...state, price: action.payload.price };
        default:
            return state;


    }
};

export default reducerFilter;