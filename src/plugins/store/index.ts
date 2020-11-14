import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import contentReducers from "./content/reducers";

const combinedReducers = combineReducers({
    content: contentReducers,
});

const store = createStore(combinedReducers, {}, applyMiddleware(...[thunk]));

export type Store = ReturnType<typeof combinedReducers>;

export default store;
