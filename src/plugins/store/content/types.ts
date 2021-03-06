export enum TYPES {
    REQUEST_HEADLINES_CONTENTS_INITIAL = "REQUEST_HEADLINE_CONTENTS_INITIAL",
    REQUEST_HEADLINES_CONTENTS_COMPLETED = "REQUEST_HEADLINE_CONTENTS_COMPLETED",
    REQUEST_CONTENTS_INITIAL = "REQUEST_CONTENTS_INITIAL",
    REQUEST_CONTENTS_COMPLETED = "REQUEST_CONTENTS_COMPLETED",
    REQUEST_TRENDING_CONTENTS_INITIAL = "REQUEST_TRENDING_CONTENTS_INITIAL",
    REQUEST_TRENDING_CONTENTS_COMPLETED = "REQUEST_TRENDING_CONTENTS_COMPLETED",
    REQUEST_CONTENT_INITIAL = "REQUEST_CONTENT_INITIAL",
    REQUEST_CONTENT_COMPLETED = "REQUEST_CONTENT_COMPLETED",
    IS_ERROR = "IS_ERROR",
}

export type Content = {
    id?: string;
    title?: string;
    description?: string;
    thumb?: string;
    video?: string;
    type?: ContentType;
    viewed?: number;
    totalEpisodes?: number;
    releaseYear?: string;
    isHeadline?: boolean;
};

export enum ContentType {
    series = "series",
    movie = "movie",
}

export type State = {
    headlinesContents: Array<Content>;
    contents: Array<Content>;
    trendingContents: Array<Content>;
    content: Content;
    isError: boolean;
};

export type Action = {
    type: TYPES;
    payloads?: {
        headlinesContents?: Array<Content>;
        contents?: Array<Content>;
        trendingContents?: Array<Content>;
        content?: Content;
    };
};
