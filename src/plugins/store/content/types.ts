export enum TYPES {
    REQUEST_HEADLINE_INITIAL = "REQUEST_HEADLINE_INITIAL",
    REQUEST_HEADLINE_COMPLETED = "REQUEST_HEADLINE_COMPLETED",
    REQUEST_CONTENTS_INITIAL = "REQUEST_CONTENTS_INITIAL",
    REQUEST_CONTENTS_COMPLETED = "REQUEST_CONTENTS_COMPLETED",
    REQUEST_TRENDING_INITIAL = "REQUEST_TRENDING_INITIAL",
    REQUEST_TRENDING_COMPLETED = "REQUEST_TRENDING_COMPLETED",
    IS_ERROR = "IS_ERROR",
}

export type Content = {
    id: number;
    title: string;
    description: string;
    thumb: string;
    video: string;
    type: ContentType;
    viewed: number;
    totalEpisodes: number;
    releaseYear: string;
};

export enum ContentType {
    series = "series",
    movie = "movie",
}

export type State = {
    headlines: Array<Content>;
    headlinesTotal: number;
    contents: Array<Content>;
    contentsTotal: number;
    trending: Array<Content>;
    trendingTotal: number;
    isError: boolean;
};

export type Action = {
    type: TYPES;
    payloads?: {
        headlines?: Array<Content>;
        headlinesTotal?: number;
        contents?: Array<Content>;
        contentsTotal?: number;
        trending?: Array<Content>;
        trendingTotal?: number;
    };
};
