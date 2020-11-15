import { State, Action, TYPES } from "./types";

const initialState: State = {
    isVideoPlaying: false,
    episode: 1,
    thumbnail: "",
    video: "",
    timeToContiue: 0,
};

const reducers = (state = initialState, { type, payloads }: Action): State => {
    switch (type) {
        case TYPES.REGISTER_VIDEO:
            return {
                ...state,
                episode: payloads?.episode!!,
                thumbnail: payloads?.thumbnail!!,
                video: payloads?.video!!,
                timeToContiue: 0,
            };

        case TYPES.PLAY_VIDEO:
            return { ...state, isVideoPlaying: true };

        case TYPES.PAUSE_VIDEO:
            return { ...state, isVideoPlaying: false };

        case TYPES.CONTINUE_VIDEO:
            return { ...state, timeToContiue: payloads?.timeToContinue!! };

        case TYPES.UNREGISTER_VIDEO:
            return {
                ...state,
                isVideoPlaying: false,
                episode: 1,
                thumbnail: "",
                video: "",
                timeToContiue: 0,
            };

        default:
            return state;
    }
};

export default reducers;
