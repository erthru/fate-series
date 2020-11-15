import { Dispatch } from "redux";
import { fetchComments } from "../../repositories";
import { Action, TYPES } from "./types";

export const getComments = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUEST_COMMENTS_INITIAL });
        const response = await fetchComments();
        dispatch({ type: TYPES.REQUEST_COMMENTS_COMPLETED, payload: { comments: response.comments, commentsTotal: response.total } });
    } catch (e: any) {
        dispatch({ type: TYPES.IS_ERROR });
    }
};
