import { faPlay } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Icon from "../ui/icon";

type Props = {
    thumbnail: string;
    url: string;
};

const VideoStreamer = (props: Props) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="w-full h-full relative">
            {!isPlaying ? (
                <div
                    className="absolute w-full h-full rounded-lg"
                    style={{
                        backgroundImage: "linear-gradient(to bottom, transparent 0%, black 250%), linear-gradient(to top, transparent 0%, black 250%), url(" + props.thumbnail + ")",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                    }}
                ></div>
            ) : null}

            <video className="h-auto w-full rounded-lg" onClick={() => setIsPlaying(!isPlaying)} src={props.url} controls />
        </div>
    );
};

export default VideoStreamer;
