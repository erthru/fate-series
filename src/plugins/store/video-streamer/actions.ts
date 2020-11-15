import { Dispatch } from "redux";
import { Action, TYPES } from "./types";

export const registerVideo = (title: string, thumbnail: string, video: string, episode: number) => (dispatch: Dispatch<Action>) => {
    dispatch({ type: TYPES.STOP_VIDEO });

    dispatch({
        type: TYPES.PLAY_VIDEO,
        payloads: {
            isVideoPlaying: true,
            title: title,
            thumbnail: thumbnail,
            video: video,
            episode: episode,
        },
    });
};

export const unregisterVideo = () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: TYPES.STOP_VIDEO });
};
