import { faPlay } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Icon from "../ui/icon";

type Props = {
    thumbnail: string;
    url: string;
};

const VideoStreamer = (props: Props) => <video className="h-auto w-full rounded-lg" poster={props.thumbnail} src={props.url} controls style={{ objectFit: "cover" }} />;

export default VideoStreamer;
