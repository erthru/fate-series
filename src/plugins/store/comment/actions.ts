import { Dispatch } from "redux";
import db, { COLLECTION_COMMENTS } from "../../db";
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
        const query = await db.collection(COLLECTION_COMMENTS).where("contentId", "==", contentId).get();

        query.docs.map((doc) => {
            comments.push(fillComment(doc.id, doc.data()));
        });

        dispatch({ type: TYPES.REQUEST_COMMENTS_COMPLETED, payload: { comments: comments, isCommentsEmpty: comments.length === 0 } });
    } catch (e: any) {
        dispatch({ type: TYPES.IS_ERROR });
    }
};

export const addAnonymousComment = (body: string, contentId: string) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUEST_COMMENTS_INITIAL });

        await db.collection(COLLECTION_COMMENTS).add({
            name: "Anonymous",
            body: body,
            avatar: "https://images.alphacoders.com/163/thumb-1920-163821.jpg",
            contentId: contentId,
        });

        dispatch({ type: TYPES.REQUEST_ADD_COMMENT_COMPLETED });
    } catch (e: any) {
        dispatch({ type: TYPES.IS_ERROR });
    }
};
