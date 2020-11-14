import { API_BASE_URL } from "../../helpers/contants";
import { Content } from "../store/content/types";
import IFetchContentsResponse from "./responses/fetchContentsResponse";
import IFetchHeadlinesResponse from "./responses/fetchHeadlinesResponse";
import IFetchTrendingResponse from "./responses/fetchTrendingResponse";

export const fetchHeadlines = async (): Promise<IFetchHeadlinesResponse> => {
    const _fetch = await fetch(API_BASE_URL + "contents.json");
    const response = (await _fetch.json()) as IFetchHeadlinesResponse;

    const contents: Array<Content> = [];

    contents.push(response.contents[3]);
    contents.push(response.contents[4]);
    contents.push(response.contents[7]);

    const newResponse: IFetchHeadlinesResponse = {
        contents: contents,
        total: response.total,
    };

    return newResponse;
};

export const fetchContents = async (): Promise<IFetchContentsResponse> => {
    const _fetch = await fetch(API_BASE_URL + "contents.json");
    return (await _fetch.json()) as IFetchContentsResponse;
};

export const fetchTrending = async (): Promise<IFetchTrendingResponse> => {
    const _fetch = await fetch(API_BASE_URL + "contents.json");
    const response = (await _fetch.json()) as IFetchTrendingResponse;

    const contents: Array<Content> = [];

    for (let i = 0; i < 5; i++) {
        contents.push(response.contents[i]);
    }

    const newResponse: IFetchTrendingResponse = {
        contents: contents,
        total: response.total,
    };

    return newResponse;
};
