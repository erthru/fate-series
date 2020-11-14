import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
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

    const routeTo = (path: string) => {
        dispatch(toggleNavbarDrop());
        history.push(path);
    };

    return (
        <div className={"navbar-drop flex flex-wrap w-full bg-indigo-1500 container px-6 md:px-16 " + (props.isShown ? "navbar-drop-active" : "")}>
            <NavbarDropItem text="Home" isActive={currentPath === "/"} onClick={() => routeTo("/")} />
            <NavbarDropItem text="Schedule" isActive={currentPath === "/schedule"} onClick={() => routeTo("/schedule")} />
            <NavbarDropItem text="Our Blog" isActive={currentPath === "/our-blog"} onClick={() => routeTo("/our-blog")} />
            <NavbarDropItem text="Staff" isActive={currentPath === "/staff"} onClick={() => routeTo("/staff")} />

            <div className="pb-2 w-full"></div>
        </div>
    );
};

export default NavbarDrop;
