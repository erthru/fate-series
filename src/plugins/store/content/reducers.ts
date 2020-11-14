import { State, Action, TYPES } from "./types";

const initialState: State = {
    headlinesContents: [],
    headlinesContentsTotal: 0,
    contents: [],
    contentsTotal: 0,
    trendingContents: [],
    trendingContentsTotal: 0,
    isError: false,
};

const reducers = (state = initialState, { type, payloads }: Action): State => {
    switch (type) {
        case TYPES.REQUEST_HEADLINES_CONTENTS_INITIAL:
            return { ...state, headlinesContents: [], headlinesContentsTotal: 0, isError: false };

        case TYPES.REQUEST_HEADLINES_CONTENTS_COMPLETED:
            return { ...state, headlinesContents: payloads?.headlinesContents!!, headlinesContentsTotal: payloads?.headlinesContentsTotal!! };

        case TYPES.REQUEST_CONTENTS_INITIAL:
            return { ...state, contents: [], contentsTotal: 0, isError: false };

        case TYPES.REQUEST_CONTENTS_COMPLETED:
            return { ...state, contents: payloads?.contents!!, contentsTotal: payloads?.contentsTotal!! };

        case TYPES.REQUEST_TRENDING_CONTENTS_INITIAL:
            return { ...state, trendingContents: [], trendingContentsTotal: 0, isError: false };

        case TYPES.REQUEST_TRENDING_CONTENTS_COMPLETED:
            return { ...state, trendingContents: payloads?.trendingContents!!, trendingContentsTotal: payloads?.trendingContentsTotal!! };

        case TYPES.IS_ERROR:
            return { ...state, isError: true };

        default:
            return state;
    }
};

export default reducers;
