import { Dispatch } from "redux";
import { Action, TYPES } from "./types";

export const registerVideo = (title: string, thumbnail: string, video: string, episode: number) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: TYPES.STOP_VIDEO });

    dispatch({
        type: TYPES.PLAY_VIDEO,
        payloads: {
            title: title,
            thumbnail: thumbnail,
            video: video,
            episode: episode,
        },
    });
};

export const continueVideo = (timeToContinue: number) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: TYPES.CONTINUE_VIDEO, payloads: { timeToContinue: timeToContinue } });
};

export const unregisterVideo = () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: TYPES.STOP_VIDEO });
};
