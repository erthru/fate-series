import { Dispatch } from "redux";
import { DB_COLLECTION_COMMENTS_NAME } from "../../../helpers/contants";
import db from "../../db";
import { Action, Comment, TYPES } from "./types";

const fillComment = (id: string, data: any): Comment => {
    return {
        id: id,
        name: data.name,
        body: data.body,
        avatar: data.avatar,
        contentId: data.contentId,
    };
};

export const getComments = (contentId: string) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUEST_COMMENTS_INITIAL });

        const comments: Array<Comment> = [];
        const query = await db.collection(DB_COLLECTION_COMMENTS_NAME).where("contentId", "==", contentId).get();

        query.docs.map((doc) => {
            comments.push(fillComment(doc.id, doc.data()));
        });

        dispatch({ type: TYPES.REQUEST_COMMENTS_COMPLETED, payload: { comments: comments } });
    } catch (e: any) {
        dispatch({ type: TYPES.IS_ERROR });
    }
};
