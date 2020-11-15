import { API_BASE_URL } from "../../helpers/contants";
import { Content } from "../store/content/types";
import IFetchCommentsResponse from "./responses/fetchCommentsResponse";
import IFetchContentResponse from "./responses/fetchContentResponse";
import IFetchContentsResponse from "./responses/fetchContentsResponse";
import IFetchHeadlinesContentsResponse from "./responses/fetchHeadlinesContentsResponse";
import IFetchTrendingContentsResponse from "./responses/fetchTrendingContentsResponse";

export const fetchHeadlinesContents = async (): Promise<IFetchHeadlinesContentsResponse> => {
    const _fetch = await fetch(API_BASE_URL + "contents.json");
    const response = (await _fetch.json()) as IFetchHeadlinesContentsResponse;

    const contents: Array<Content> = [];

    contents.push(response.contents[3]);
    contents.push(response.contents[4]);
    contents.push(response.contents[7]);

    const newResponse: IFetchHeadlinesContentsResponse = {
        contents: contents,
        total: response.total,
    };

    return newResponse;
};

export const fetchContents = async (): Promise<IFetchContentsResponse> => {
    const _fetch = await fetch(API_BASE_URL + "contents.json");
    return (await _fetch.json()) as IFetchContentsResponse;
};

export const fetchContent = async (id: number): Promise<IFetchContentResponse> => {
    const _fetch = await fetch(API_BASE_URL + "contents.json");
    const response = (await _fetch.json()) as IFetchContentsResponse;

    const filteredContents = response.contents.filter((content) => {
        return content.id === id;
    });

    const newResponse: IFetchContentResponse = {
        content: filteredContents[0],
    };

    return newResponse;
};

export const fetchTrendingContents = async (): Promise<IFetchTrendingContentsResponse> => {
    const _fetch = await fetch(API_BASE_URL + "contents.json");
    const response = (await _fetch.json()) as IFetchTrendingContentsResponse;

    const contents: Array<Content> = [];

    for (let i = 0; i < 5; i++) {
        contents.push(response.contents[i]);
    }

    const newResponse: IFetchTrendingContentsResponse = {
        contents: contents,
        total: response.total,
    };

    return newResponse;
};

export const fetchComments = async (): Promise<IFetchCommentsResponse> => {
    const _fetch = await fetch(API_BASE_URL + "comments.json");
    return (await _fetch.json()) as IFetchCommentsResponse;
};
