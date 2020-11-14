import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Icon from "../ui/icon";

type Props = {
    color: string;
    className?: string;
};

const ProgressBar = (props: Props) => <Icon icon={faCircleNotch} className={"text-4xl animate-spin text-" + props.color + " " + props.className} />;

export default ProgressBar;
