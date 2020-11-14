import { Dispatch } from "redux";
import { fetchContent, fetchContents, fetchHeadlinesContents, fetchTrendingContents } from "../../repositories";
import { Action, TYPES } from "./types";

export const getHeadlinesContents = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUEST_HEADLINES_CONTENTS_INITIAL });
        const response = await fetchHeadlinesContents();
        dispatch({ type: TYPES.REQUEST_HEADLINES_CONTENTS_COMPLETED, payloads: { headlinesContents: response.contents, headlinesContentsTotal: response.total } });
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

export const getContent = (id: number) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUEST_CONTENT_INITIAL });
        const response = await fetchContent(id);
        dispatch({ type: TYPES.REQUEST_CONTENT_COMPLETED, payloads: { content: response.content } });
    } catch (e: any) {
        dispatch({ type: TYPES.IS_ERROR });
    }
};

export const getTrendingContents = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUEST_TRENDING_CONTENTS_INITIAL });
        const response = await fetchTrendingContents();
        dispatch({ type: TYPES.REQUEST_TRENDING_CONTENTS_COMPLETED, payloads: { trendingContents: response.contents, trendingContentsTotal: response.total } });
    } catch (e: any) {
        dispatch({ type: TYPES.IS_ERROR });
    }
};
