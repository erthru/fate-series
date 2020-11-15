import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../../plugins/store";

const VideoStreamer = () => {
    const thumbnail = useSelector((store: Store) => store.videoStreamer.thumbnail) as string;
    const video = useSelector((store: Store) => store.videoStreamer.video) as string;

    return video !== "" ? <video className="h-auto w-full rounded-lg" poster={thumbnail} src={video} controls style={{ objectFit: "cover" }} /> : null;
};

export default VideoStreamer;
