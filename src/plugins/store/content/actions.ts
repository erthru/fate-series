import { Dispatch } from "redux";
import { DB_COLLECTION_CONTENTS_NAME } from "../../../helpers/contants";
import db from "../../db";
import { Action, Content, TYPES } from "./types";

const fillContent = (id: string, data: any): Content => {
    return {
        id: id,
        title: data.title,
        description: data.description,
        thumb: data.thumb,
        video: data.video,
        type: data.type,
        viewed: data.viewed,
        totalEpisodes: data.totalEpisodes,
        releaseYear: data.releaseYear,
        isHeadline: data.isHeadline,
    };
};

export const getHeadlinesContents = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUEST_HEADLINES_CONTENTS_INITIAL });

        const contents: Array<Content> = [];
        const query = await db.collection(DB_COLLECTION_CONTENTS_NAME).where("isHeadline", "==", true).get();

        query.docs.map((doc) => {
            contents.push(fillContent(doc.id, doc.data()));
        });

        dispatch({ type: TYPES.REQUEST_HEADLINES_CONTENTS_COMPLETED, payloads: { headlinesContents: contents.reverse() } });
    } catch (e: any) {
        dispatch({ type: TYPES.IS_ERROR });
    }
};

export const getContents = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUEST_CONTENTS_INITIAL });

        const contents: Array<Content> = [];
        const query = await db.collection(DB_COLLECTION_CONTENTS_NAME).get();

        query.docs.map((doc) => {
            contents.push(fillContent(doc.id, doc.data()));
        });

        dispatch({ type: TYPES.REQUEST_CONTENTS_COMPLETED, payloads: { contents: contents } });
    } catch (e: any) {
        dispatch({ type: TYPES.IS_ERROR });
    }
};

export const getContent = (id: string) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUEST_CONTENT_INITIAL });

        const query = await db.collection(DB_COLLECTION_CONTENTS_NAME).doc(id).get();
        const content: Content = fillContent(query.id, query.data());

        dispatch({ type: TYPES.REQUEST_CONTENT_COMPLETED, payloads: { content: content } });
    } catch (e: any) {
        dispatch({ type: TYPES.IS_ERROR });
    }
};

export const getTrendingContents = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUEST_TRENDING_CONTENTS_INITIAL });

        const contents: Array<Content> = [];
        const query = await db.collection(DB_COLLECTION_CONTENTS_NAME).get();

        for (let i = 0; i < query.docs.length; i++) {
            const rand = Math.floor(Math.random() * query.docs.length);
            const contentToPush = fillContent(query.docs[rand].id, query.docs[rand].data());

            if (contents.length < 4 && contents.find((e) => e.id === contentToPush.id) === undefined) contents.push(contentToPush);
        }

        dispatch({ type: TYPES.REQUEST_TRENDING_CONTENTS_COMPLETED, payloads: { trendingContents: contents } });
    } catch (e: any) {
        dispatch({ type: TYPES.IS_ERROR });
    }
};
