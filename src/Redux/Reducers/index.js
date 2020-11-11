import { combineReducers } from 'redux';
import Add from "./reducerAdd";
import Fav from "./reducerFav";
import Search from "./reducerSearch";

const reducer = combineReducers({
    Add: Add,
    Fav: Fav,
    Search: Search
})

export default reducer;