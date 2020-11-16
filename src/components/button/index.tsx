import React from "react";
import ProgressBar from "../progress-bar";

type Props = {
    type?: "button" | "submit" | "reset";
    children?: React.ReactNode;
    isLoading?: boolean;
    color?: string;
    className?: string;
    onClick?(): void;
};

const Button = (props: Props) => (
    <button type={props.type} className={props.className + " rounded-lg px-4 py-2 font-medium text-white bg-" + props.color} onClick={props.onClick} disabled={props.isLoading}>
        {!props.isLoading ? props.children : <ProgressBar color="white" size="2xl" />}
    </button>
);

export default Button;
