import React from "react";
import { Link } from "react-router-dom";

type Props = {
    text: string;
    onClick?(): void;
};

const EpisodeButton = (props: Props) => (
    <button className="w-24 rounded-lg h-10 bg-indigo-900 flex items-center hover:bg-white" onClick={props.onClick}>
        <span className="text-gray-200 hover:text-gray-900 mx-auto font-medium">Ep. {props.text}</span>
    </button>
);

export default EpisodeButton;
