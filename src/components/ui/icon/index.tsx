import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
    icon: IconProp;
    className?: string;
    onClick?(): void;
};

const Icon = (props: Props) => <FontAwesomeIcon icon={props.icon} className={props.className} onClick={props.onClick} />;

export default Icon;
