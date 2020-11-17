import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { getComments } from "../../plugins/store/comment/actions";
import { Comment } from "../../plugins/store/comment/types";
import CommentItem from "../comment-item";
import ProgressBar from "../progress-bar";

type Props = {
    contentId: string;
};

const Comments = (props: Props) => {
    const dispatch = useDispatch();
    const comments = useSelector((store: Store) => store.comment.comments) as Array<Comment>;
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setIsFetching(true);
        dispatch(getComments(props.contentId));
    }, [dispatch]);

    return (
        <div>
            {isFetching && comments.length === 0 ? (
                <div className="w-full flex mt-8">
                    <ProgressBar color="white" className="mx-auto" size="4xl" />
                </div>
            ) : null}

            {comments.map((comment) => (
                <div className="w-full mt-6" key={comment.id}>
                    <CommentItem comment={comment} />
                </div>
            ))}
        </div>
    );
};

export default Comments;
