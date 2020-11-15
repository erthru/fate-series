export enum TYPES {
    REGISTER_VIDEO = "REGISTER_VIDEO",
    PLAY_VIDEO = "PLAY_VIDEO",
    PAUSE_VIDEO = "PAUSE_VIDEO",
    CONTINUE_VIDEO = "CONTINUE_VIDEO",
    UNREGISTER_VIDEO = "STOP_VIDEO",
}

export type State = {
    isVideoPlaying: boolean;
    episode: number;
    thumbnail: string;
    video: string;
    timeToContiue: number;
};

export type Action = {
    type: TYPES;
    payloads?: {
        isVideoPlaying?: boolean;
        episode?: number;
        thumbnail?: string;
        video?: string;
        timeToContinue?: number;
    };
};
