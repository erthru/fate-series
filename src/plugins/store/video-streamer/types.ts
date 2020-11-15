export enum TYPES {
    PLAY_VIDEO = "PLAY_VIDEO",
    STOP_VIDEO = "STOP_VIDEO",
}

export type State = {
    isVideoPlaying: boolean;
    title: string;
    episode: number;
    thumbnail: string;
    video: string;
};

export type Action = {
    type: TYPES;
    payloads?: {
        isVideoPlaying: boolean;
        title: string;
        episode: number;
        thumbnail: string;
        video: string;
    };
};
