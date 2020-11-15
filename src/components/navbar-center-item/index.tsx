import React from "react";

type Props = {
    text: string;
    isActive?: boolean;
    onClick?: () => void;
};

const NavbarCenterItem = (props: Props) => (
    <div className={"px-8 flex h-full items-center cursor-pointer " + (props.isActive ? "bg-red-600 text-white" : "text-gray-400 hover:text-white")} onClick={props.onClick}>
        {props.text}
    </div>
);

export default NavbarCenterItem;
