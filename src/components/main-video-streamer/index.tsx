import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { continueVideo, pauseVideo, playVideo } from "../../plugins/store/video-streamer/actions";

const MainVideoStreamer = () => {
    const dispatch = useDispatch();
    const thumbnail = useSelector((store: Store) => store.videoStreamer.thumbnail) as string;
    const video = useSelector((store: Store) => store.videoStreamer.video) as string;

    const setCurrentContinueCurrentTime = (e: any) => {
        const currentTime = e.target.currentTime as number;
        if (currentTime > 0) dispatch(continueVideo(currentTime));
    };

    return <video className="h-auto w-full rounded-lg" poster={thumbnail} src={video} controls style={{ objectFit: "cover" }} onTimeUpdate={setCurrentContinueCurrentTime} onPause={() => dispatch(pauseVideo())} onPlay={() => dispatch(playVideo())} />;
};

export default MainVideoStreamer;
