import { Action, State, TYPES } from "./types";

const initialState: State = {
    comments: [],
    isCommentsEmpty: false,
    isCommentAdded: false,
    isError: false,
};

const reducers = (state = initialState, { type, payload }: Action): State => {
    switch (type) {
        case TYPES.REQUEST_COMMENTS_INITIAL:
            return { ...state, comments: [], isCommentsEmpty: false, isError: false };

        case TYPES.REQUEST_COMMENTS_COMPLETED:
            return { ...state, comments: payload?.comments!!, isCommentsEmpty: payload?.isCommentsEmpty!! };

        case TYPES.REQUEST_ADD_COMMENT_INITIAL:
            return { ...state, isCommentAdded: false, isError: false };

        case TYPES.REQUEST_ADD_COMMENT_COMPLETED:
            return { ...state, isCommentAdded: true };

        default:
            return state;
    }
};

export default reducers;
