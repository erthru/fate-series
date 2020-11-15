import { Dispatch } from "redux";
import { Action, TYPES } from "./types";

export const registerVideo = (thumbnail: string, video: string, episode: number) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: TYPES.UNREGISTER_VIDEO });

    dispatch({
        type: TYPES.REGISTER_VIDEO,
        payloads: {
            thumbnail: thumbnail,
            video: video,
            episode: episode,
        },
    });
};

export const playVideo = () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: TYPES.PLAY_VIDEO });
};

export const pauseVideo = () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: TYPES.PAUSE_VIDEO });
};

export const continueVideo = (timeToContinue: number) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: TYPES.CONTINUE_VIDEO, payloads: { timeToContinue: timeToContinue } });
};

export const unregisterVideo = () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: TYPES.UNREGISTER_VIDEO });
};
