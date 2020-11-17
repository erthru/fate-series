import { State, Action, TYPES } from "./types";

const initialState: State = {
    headlinesContents: [],
    contents: [],
    trendingContents: [],
    content: {},
    isError: false,
};

const reducers = (state = initialState, { type, payloads }: Action): State => {
    switch (type) {
        case TYPES.REQUEST_HEADLINES_CONTENTS_INITIAL:
            return { ...state, headlinesContents: [], isError: false };

        case TYPES.REQUEST_HEADLINES_CONTENTS_COMPLETED:
            return { ...state, headlinesContents: payloads?.headlinesContents!! };

        case TYPES.REQUEST_CONTENTS_INITIAL:
            return { ...state, contents: [], isError: false };

        case TYPES.REQUEST_CONTENTS_COMPLETED:
            return { ...state, contents: payloads?.contents!! };

        case TYPES.REQUEST_TRENDING_CONTENTS_INITIAL:
            return { ...state, trendingContents: [], isError: false };

        case TYPES.REQUEST_TRENDING_CONTENTS_COMPLETED:
            return { ...state, trendingContents: payloads?.trendingContents!! };

        case TYPES.REQUEST_CONTENT_INITIAL:
            return { ...state, content: {} };

        case TYPES.REQUEST_CONTENT_COMPLETED:
            return { ...state, content: payloads?.content!! };

        case TYPES.IS_ERROR:
            return { ...state, isError: true };

        default:
            return state;
    }
};

export default reducers;
