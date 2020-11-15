import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggleNavbarDrop } from "../../plugins/store/navbar/actions";

type Props = {
    text: string;
    to: string;
};

const NavbarDropItem = (props: Props) => {
    const dispatch = useDispatch();
    const location = useLocation();

    return (
        <Link className="w-full" to={props.to} onClick={() => dispatch(toggleNavbarDrop())}>
            <div className={"flex items-center w-full py-2 " + (props.to === location.pathname ? "bg-red-600" : "")}>
                <span className={"font-medium text-lg mx-auto " + (props.to === location.pathname ? "text-white" : "text-gray-600")}>{props.text}</span>
            </div>
        </Link>
    );
};

export default NavbarDropItem;
