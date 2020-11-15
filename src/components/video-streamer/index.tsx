import React from "react";

type Props = {
    thumbnail: string;
    url: string;
};

const VideoStreamer = (props: Props) => <video className="h-auto w-full rounded-lg" poster={props.thumbnail} src={props.url} controls style={{ objectFit: "cover" }} />;

export default VideoStreamer;
