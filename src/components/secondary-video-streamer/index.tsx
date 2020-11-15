import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Store } from "../../plugins/store";

const SecondaryVideoStreamer = () => {
    const thumbnail = useSelector((store: Store) => store.videoStreamer.thumbnail) as string;
    const video = useSelector((store: Store) => store.videoStreamer.video) as string;
    const timeToContiue = useSelector((store: Store) => store.videoStreamer.timeToContiue) as number;
    const videoRef: React.RefObject<HTMLVideoElement> = React.createRef();

    useEffect(() => {
        videoRef.current!!.currentTime = timeToContiue;
        videoRef.current?.play();
    }, []);

    return <video className="h-auto w-full rounded-lg" ref={videoRef} poster={thumbnail} src={video} controls style={{ objectFit: "cover" }} />;
};

export default SecondaryVideoStreamer;
