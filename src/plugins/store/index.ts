import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import contentReducers from "./content/reducers";
import videoStreamerReducers from "./video-streamer/reducers";
import commentReducer from "./comment/reducers";

const combinedReducers = combineReducers({
    content: contentReducers,
    videoStreamer: videoStreamerReducers,
    comment: commentReducer,
});

const store = createStore(combinedReducers, {}, applyMiddleware(...[thunk]));

export type Store = ReturnType<typeof combinedReducers>;

export default store;
