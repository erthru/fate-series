import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Store } from "../../plugins/store";
import { getComments } from "../../plugins/store/comment/actions";
import { Comment } from "../../plugins/store/comment/types";
import CommentItem from "../comment-item";
import ProgressBar from "../progress-bar";

type Params = {
    id: string;
};

const Comments = () => {
    const dispatch = useDispatch();
    const comments = useSelector((store: Store) => store.comment.comments) as Array<Comment>;
    const isCommentsEmpty = useSelector((store: Store) => store.comment.isCommentsEmpty) as boolean;
    const isCommentAdded = useSelector((store: Store) => store.comment.isCommentAdded) as boolean;
    const [isFetching, setIsFetching] = useState(false);
    const { id } = useParams<Params>();

    useEffect(() => {
        fetch();
    }, []);

    useEffect(() => {
        if (isCommentAdded) fetch();
    }, [isCommentAdded]);

    const fetch = () => {
        setIsFetching(true);
        dispatch(getComments(id));
    };

    return (
        <div>
            {isFetching && comments.length === 0 && !isCommentsEmpty ? (
                <div className="w-full flex mt-8">
                    <ProgressBar color="white" className="mx-auto" size="4xl" />
                </div>
            ) : null}

            {isCommentsEmpty ? <span className="text-gray-500">Comments Empty</span> : null}

            {comments.map((comment) => (
                <div className="w-full mt-6" key={comment.id}>
                    <CommentItem comment={comment} />
                </div>
            ))}
        </div>
    );
};

export default Comments;
