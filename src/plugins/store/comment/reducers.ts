import { Action, State, TYPES } from "./types";

const initialState: State = {
    comments: [],
    isError: false,
};

const reducers = (state = initialState, { type, payload }: Action): State => {
    switch (type) {
        case TYPES.REQUEST_COMMENTS_INITIAL:
            return { ...state, comments: [], isError: false };

        case TYPES.REQUEST_COMMENTS_COMPLETED:
            return { ...state, comments: payload?.comments!! };

        default:
            return state;
    }
};

export default reducers;
