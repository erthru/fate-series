import VideoStreamer from "../../../components/video-streamer";
import { State, Action, TYPES } from "./types";

const initialState: State = {
    isVideoPlaying: false,
    title: "",
    episode: 1,
    thumbnail: "",
    video: "",
};

const reducers = (state = initialState, { type, payloads }: Action): State => {
    switch (type) {
        case TYPES.PLAY_VIDEO:
            return {
                ...state,
                title: payloads?.title!!,
                episode: payloads?.episode!!,
                thumbnail: payloads?.thumbnail!!,
                video: payloads?.video!!,
                isVideoPlaying: true,
            };

        case TYPES.STOP_VIDEO:
            return {
                ...state,
                title: "",
                episode: 1,
                thumbnail: "",
                video: "",
                isVideoPlaying: false,
            };

        default:
            return state;
    }
};

export default reducers;
