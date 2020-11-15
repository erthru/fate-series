import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { getComments } from "../../plugins/store/comment/actions";
import { Comment } from "../../plugins/store/comment/types";
import CommentItem from "../comment-item";

const Comments = () => {
    const dispatch = useDispatch();
    const comments = useSelector((store: Store) => store.comment.comments) as Array<Comment>;

    useEffect(() => {
        dispatch(getComments());
    }, [dispatch]);

    return (
        <div>
            {comments.map((comment) => (
                <div className="w-full mt-6">
                    <CommentItem comment={comment} />
                </div>
            ))}
        </div>
    );
};

export default Comments;
