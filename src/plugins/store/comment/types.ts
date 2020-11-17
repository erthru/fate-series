export enum TYPES {
    REQUEST_COMMENTS_INITIAL = "REQUEST_COMMENTS_INITIAL",
    REQUEST_COMMENTS_COMPLETED = "REQUEST_COMMENTS_COMPLETED",
    REQUEST_ADD_COMMENT_INITIAL = "REQUEST_ADD_COMMENT_INITIAL",
    REQUEST_ADD_COMMENT_COMPLETED = "REQUEST_ADD_COMMENT_COMPLETED",
    IS_ERROR = "IS_ERROR",
}

export type Comment = {
    id?: string;
    name?: string;
    body?: string;
    avatar?: string;
    contentId?: string;
};

export type State = {
    comments: Array<Comment>;
    isCommentsEmpty: boolean;
    isCommentAdded: boolean;
    isError: boolean;
};

export type Action = {
    type: TYPES;
    payload?: {
        comments?: Array<Comment>;
        isCommentsEmpty?: boolean;
    };
};
