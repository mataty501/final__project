import { combineReducers } from 'redux';
import Add from "./reducerAdd";
import Fav from "./reducerFav";
import Filter from "./reducerFilter";
import MaxMin from "./reducerMaxMin";
import User from "./reducerUser"

const reducer = combineReducers({
    Add: Add,
    Fav: Fav,
    Filter: Filter,
    MaxMin: MaxMin,
    User: User
})

export default reducer;