export enum TYPES {
    PLAY_VIDEO = "PLAY_VIDEO",
    CONTINUE_VIDEO = "CONTINUE_VIDEO",
    STOP_VIDEO = "STOP_VIDEO",
}

export type State = {
    title: string;
    episode: number;
    thumbnail: string;
    video: string;
    timeToContiue: number;
};

export type Action = {
    type: TYPES;
    payloads?: {
        isVideoPlaying?: boolean;
        title?: string;
        episode?: number;
        thumbnail?: string;
        video?: string;
        timeToContinue?: number
    };
};
