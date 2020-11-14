import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { ROUTER_PATH } from "../../../helpers/contants";
import { toggleNavbarDrop } from "../../../plugins/store/navbar/actions";
import NavbarDropItem from "./navbar-drop-item";
import "./styles.css";

type Props = {
    isShown: boolean;
};

const NavbarDrop = (props: Props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const [currentPath, setCurrentPath] = useState("/");

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    const routeTo = (path: ROUTER_PATH) => {
        dispatch(toggleNavbarDrop());
        history.push(path);
    };

    return (
        <div className={"navbar-drop flex flex-wrap w-full bg-indigo-1500 container px-6 md:px-16 " + (props.isShown ? "navbar-drop-active" : "")}>
            <NavbarDropItem text="Home" isActive={currentPath === ROUTER_PATH.HOME} onClick={() => routeTo(ROUTER_PATH.HOME)} />
            <NavbarDropItem text="Schedule" isActive={currentPath === ROUTER_PATH.SCHEDULE} onClick={() => routeTo(ROUTER_PATH.SCHEDULE)} />
            <NavbarDropItem text="Our Blog" isActive={currentPath === ROUTER_PATH.OUR_BLOG} onClick={() => routeTo(ROUTER_PATH.OUR_BLOG)} />
            <NavbarDropItem text="Staff" isActive={currentPath === ROUTER_PATH.STAFF} onClick={() => routeTo(ROUTER_PATH.STAFF)} />

            <div className="pb-2 w-full"></div>
        </div>
    );
};

export default NavbarDrop;
