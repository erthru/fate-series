import React from "react";

type Props = {
    text: string;
    isActive: boolean;
    onClick?: () => void;
};

const NavbarDropItem = (props: Props) => (
    <div className="w-full" onClick={props.onClick}>
        <div className={"flex items-center w-full py-2 " + (props.isActive ? "bg-red-600" : "")}>
            <span className={"font-medium text-lg mx-auto " + (props.isActive ? "text-white" : "text-gray-600")}>{props.text}</span>
        </div>
    </div>
);

export default NavbarDropItem;
