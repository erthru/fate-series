import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
    text: string;
    to: string;
};

const NavbarCenterItem = (props: Props) => {
    const location = useLocation();

    return (
        <Link className={"px-8 flex h-full items-center cursor-pointer " + (props.to === location.pathname ? "bg-red-600 text-white" : "text-gray-400 hover:text-white")} to={props.to}>
            {props.text}
        </Link>
    );
};

export default NavbarCenterItem;
