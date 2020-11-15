import { State, Action, TYPES } from "./types";

const initialState: State = {
    title: "",
    episode: 1,
    thumbnail: "",
    video: "",
    timeToContiue: 0,
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
                timeToContiue: 0,
            };

        case TYPES.CONTINUE_VIDEO:
            return { ...state, timeToContiue: payloads?.timeToContinue!! };

        case TYPES.STOP_VIDEO:
            return {
                ...state,
                title: "",
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
