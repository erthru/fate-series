import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { continueVideo, pauseVideo, playVideo } from "../../plugins/store/video-streamer/actions";

type Props = {
    mode: VideoStreamerMode;
};

export enum VideoStreamerMode {
    new = "new",
    continue = "continue",
}

const VideoStreamer = (props: Props) => {
    const dispatch = useDispatch();
    const thumbnail = useSelector((store: Store) => store.videoStreamer.thumbnail) as string;
    const video = useSelector((store: Store) => store.videoStreamer.video) as string;
    const timeToContiue = useSelector((store: Store) => store.videoStreamer.timeToContiue) as number;
    const isVideoPlaying = useSelector((store: Store) => store.videoStreamer.isVideoPlaying) as boolean;
    const videoRef: React.RefObject<HTMLVideoElement> = React.createRef();

    useEffect(() => {
        if (props.mode === VideoStreamerMode.continue) {
            if (isVideoPlaying && timeToContiue > 0) {
                videoRef.current!!.currentTime = timeToContiue;
                videoRef.current?.play();
            }
        }
    }, []);

    const setCurrentContinueCurrentTime = (e: any) => {
        const currentTime = e.target.currentTime as number;
        if (currentTime > 0) dispatch(continueVideo(currentTime));
    };

    return (
        <video
            className="h-auto w-full rounded-lg"
            ref={videoRef}
            poster={thumbnail}
            src={video}
            controls
            style={{ objectFit: "cover" }}
            onTimeUpdate={setCurrentContinueCurrentTime}
            onPause={() => dispatch(pauseVideo())}
            onPlay={() => dispatch(playVideo())}
        />
    );
};

export default VideoStreamer;
