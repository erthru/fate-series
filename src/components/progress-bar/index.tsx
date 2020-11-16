import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Icon from "../icon";

type Props = {
    color: string;
    className?: string;
    size: string;
};

const ProgressBar = (props: Props) => <Icon icon={faCircleNotch} className={"animate-spin text-" + props.color + " " + props.className + " text-" + props.size} />;

export default ProgressBar;
