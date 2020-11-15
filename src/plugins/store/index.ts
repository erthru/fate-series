import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import contentReducers from "./content/reducers";
import navbarReducers from "./navbar/reducers";
import videoStreamerReducers from "./video-streamer/reducers";

const combinedReducers = combineReducers({
    content: contentReducers,
    navbar: navbarReducers,
    videoStreamer: videoStreamerReducers,
});

const store = createStore(combinedReducers, {}, applyMiddleware(...[thunk]));

export type Store = ReturnType<typeof combinedReducers>;

export default store;
