export enum TYPES {
    REQUEST_COMMENTS_INITIAL = "REQUEST_COMMENTS_INITIAL",
    REQUEST_COMMENTS_COMPLETED = "REQUEST_COMMENTS_COMPLETED",
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
    isError: boolean;
};

export type Action = {
    type: TYPES;
    payload?: {
        comments?: Array<Comment>;
    };
};
