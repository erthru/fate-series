import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Comment } from "../../plugins/store/comment/types";
import Icon from "../icon";

type Props = {
    comment: Comment;
};

const CommentItem = (props: Props) => (
    <div className="flex w-full">
        <img src={props.comment.avatar} alt="avatar" className="rounded-full w-12 h-12" style={{ objectFit: "cover" }} />

        <div className="relative w-full">
            <Icon icon={faCaretLeft} className="text-indigo-1100 text-2xl absolute ml-4 mt-3" />

            <div className="bg-indigo-1100 flex-1 p-4 ml-6 rounded-lg flex flex-wrap">
                <span className="text-white w-full">{props.comment.name}</span>
                <p className="w-full text-gray-600">{props.comment.body}</p>
            </div>
        </div>
    </div>
);

export default CommentItem;
