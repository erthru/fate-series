import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Store } from "../../plugins/store";
import { continueVideo, pauseVideo, playVideo } from "../../plugins/store/video-streamer/actions";

const VideoStreamer = () => {
    const dispatch = useDispatch();
    const thumbnail = useSelector((store: Store) => store.videoStreamer.thumbnail) as string;
    const video = useSelector((store: Store) => store.videoStreamer.video) as string;
    const timeToContiue = useSelector((store: Store) => store.videoStreamer.timeToContiue) as number;
    const isVideoPlaying = useSelector((store: Store) => store.videoStreamer.isVideoPlaying) as boolean;
    const videoRef: React.RefObject<HTMLVideoElement> = React.createRef();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes("/show/")) videoRef.current!!.currentTime = 0;
        else videoRef.current!!.currentTime = timeToContiue;

        if (isVideoPlaying && timeToContiue > 0) videoRef.current?.play();
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
