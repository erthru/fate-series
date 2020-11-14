import { Dispatch } from "redux";
import { fetchContents, fetchHeadlines, fetchTrending } from "../../repositories";
import { Action, TYPES } from "./types";

export const getHeadlines = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUEST_HEADLINE_INITIAL });
        const response = await fetchHeadlines();
        dispatch({ type: TYPES.REQUEST_HEADLINE_COMPLETED, payloads: { headlines: response.contents, headlinesTotal: response.total } });
    } catch (e: any) {
        dispatch({ type: TYPES.IS_ERROR });
    }
};

export const getContents = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUEST_CONTENTS_INITIAL });
        const response = await fetchContents();
        dispatch({ type: TYPES.REQUEST_CONTENTS_COMPLETED, payloads: { contents: response.contents, contentsTotal: response.total } });
    } catch (e: any) {
        dispatch({ type: TYPES.IS_ERROR });
    }
};

export const getTrending = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUEST_TRENDING_INITIAL });
        const response = await fetchTrending();
        dispatch({ type: TYPES.REQUEST_TRENDING_COMPLETED, payloads: { trending: response.contents, trendingTotal: response.total } });
    } catch (e: any) {
        dispatch({ type: TYPES.IS_ERROR });
    }
};
