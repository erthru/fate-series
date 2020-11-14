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
    id?: number;
    title?: string;
    description?: string;
    thumb?: string;
    video?: string;
    type?: ContentType;
    viewed?: number;
    totalEpisodes?: number;
    releaseYear?: string;
};

export enum ContentType {
    series = "series",
    movie = "movie",
}

export type State = {
    headlinesContents: Array<Content>;
    headlinesContentsTotal: number;
    contents: Array<Content>;
    contentsTotal: number;
    trendingContents: Array<Content>;
    trendingContentsTotal: number;
    content: Content;
    isError: boolean;
};

export type Action = {
    type: TYPES;
    payloads?: {
        headlinesContents?: Array<Content>;
        headlinesContentsTotal?: number;
        contents?: Array<Content>;
        contentsTotal?: number;
        trendingContents?: Array<Content>;
        trendingContentsTotal?: number;
        content?: Content;
    };
};
