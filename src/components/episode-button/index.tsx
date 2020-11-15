import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../../plugins/store";

type Props = {
    text: string;
    onClick?(): void;
};

const EpisodeButton = (props: Props) => {
    const episode = useSelector((store: Store) => store.videoStreamer.episode) as number;

    return (
        <button className={"w-24 rounded-lg h-10 flex items-center " + (props.text === episode.toString() ? "bg-indigo-1100 text-gray-200" : "bg-indigo-900 hover:bg-white text-gray-200 hover:text-gray-900")} onClick={props.onClick}>
            <span className="mx-auto font-medium">Ep. {props.text}</span>
        </button>
    );
}

export default EpisodeButton;
