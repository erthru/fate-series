import { State, Action, TYPES } from "./types";

const initialState: State = {
    headlines: [],
    headlinesTotal: 0,
    contents: [],
    contentsTotal: 0,
    trending: [],
    trendingTotal: 0,
    isError: false,
};

const reducers = (state = initialState, { type, payloads }: Action): State => {
    switch (type) {
        case TYPES.REQUEST_HEADLINE_INITIAL:
            return { ...state, headlines: [], headlinesTotal: 0, isError: false };

        case TYPES.REQUEST_HEADLINE_COMPLETED:
            return { ...state, headlines: payloads?.headlines!!, headlinesTotal: payloads?.headlinesTotal!! };

        case TYPES.REQUEST_CONTENTS_INITIAL:
            return { ...state, contents: [], contentsTotal: 0, isError: false };

        case TYPES.REQUEST_CONTENTS_COMPLETED:
            return { ...state, contents: payloads?.contents!!, contentsTotal: payloads?.contentsTotal!! };

        case TYPES.REQUEST_TRENDING_INITIAL:
            return { ...state, trending: [], trendingTotal: 0, isError: false };

        case TYPES.REQUEST_TRENDING_COMPLETED:
            return { ...state, trending: payloads?.trending!!, trendingTotal: payloads?.trendingTotal!! };

        case TYPES.IS_ERROR:
            return { ...state, isError: true };

        default:
            return state;
    }
};

export default reducers;
