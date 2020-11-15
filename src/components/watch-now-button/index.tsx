import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Icon from "../icon";

type Props = {
    onClick?(): void;
};

const WatchNowButton = (props: Props) => (
    <button className="flex cursor-pointer" onClick={props.onClick}>
        <div className="bg-red-600 px-3 rounded-l-lg text-white font-bold h-12 flex items-center">WATCH NOW</div>

        <div className="w-6 bg-red-600 ml-1 rounded-r-lg flex items-center h-12">
            <Icon icon={faChevronRight} className="text-white mx-auto" />
        </div>
    </button>
);

export default WatchNowButton;
