import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { continueVideo } from "../../plugins/store/video-streamer/actions";

const MainVideoStreamer = () => {
    const dispatch = useDispatch();
    const thumbnail = useSelector((store: Store) => store.videoStreamer.thumbnail) as string;
    const video = useSelector((store: Store) => store.videoStreamer.video) as string;
    const videoRef: React.RefObject<HTMLVideoElement> = React.createRef();

    useEffect(() => {
        return () => {
            dispatch(continueVideo(2));
        };
    }, [dispatch]);

    return <video className="h-auto w-full rounded-lg" ref={videoRef} poster={thumbnail} src={video} controls style={{ objectFit: "cover" }} />;
};

export default MainVideoStreamer;
