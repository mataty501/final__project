import { combineReducers } from 'redux';
import Add from "./reducerAdd";
import Fav from "./reducerFav";

const reducer = combineReducers({
    Add: Add,
    Fav: Fav 
}) 

export default reducer;