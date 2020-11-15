import { Action, State, TYPES } from "./types";

const initialState: State = {
    comments: [],
    commentsTotal: 0,
    isError: false,
};

const reducers = (state = initialState, { type, payload }: Action): State => {
    switch (type) {
        case TYPES.REQUEST_COMMENTS_INITIAL:
            return { ...state, comments: [], commentsTotal: 0, isError: false };

        case TYPES.REQUEST_COMMENTS_COMPLETED:
            return { ...state, comments: payload?.comments!!, commentsTotal: payload?.commentsTotal!! };

        default:
            return state;
    }
};

export default reducers;
