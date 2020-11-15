export enum TYPES {
    REQUEST_COMMENTS_INITIAL = "REQUEST_COMMENTS_INITIAL",
    REQUEST_COMMENTS_COMPLETED = "REQUEST_COMMENTS_COMPLETED",
    IS_ERROR = "IS_ERROR",
}

export type Comment = {
    id?: number;
    name?: string;
    body?: string;
    avatar?: string;
};

export type State = {
    comments: Array<Comment>;
    commentsTotal: number;
    isError: boolean;
};

export type Action = {
    type: TYPES;
    payload?: {
        comments?: Array<Comment>;
        commentsTotal?: number;
    };
};
