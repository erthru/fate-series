import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
    text: string;
    to: string;
    mode: NavbarItemMode;
};

export enum NavbarItemMode {
    vertical = "vertical",
    horizontal = "horizontal",
}

const NavbarItem = (props: Props) => {
    const location = useLocation();

    return (
        <Link className={"px-8 flex items-center " + (props.to === location.pathname ? "bg-red-600 text-white " : "text-gray-400 hover:text-white ") + (props.mode === NavbarItemMode.vertical ? "h-full" : "w-full")} to={props.to}>
            <span className={props.mode === NavbarItemMode.horizontal ? "mx-auto" : ""}>{props.text}</span>
        </Link>
    );
};

export default NavbarItem;
