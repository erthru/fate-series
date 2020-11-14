import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Store } from "../../plugins/store";
import { toggleNavbarDrop } from "../../plugins/store/navbar/actions";
import Icon from "../ui/icon";
import NavbarCenterItem from "./navbar-center-item";
import NavbarDrop from "./navbar-drop";

const Navbar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    const [currentPath, setCurrentPath] = useState("/");
    const isNavbarDropShown = useSelector((store: Store) => store.navbar.isNavbarDropShown) as boolean;

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    return (
        <div className="w-full flex flex-wrap bg-indigo-1500">
            <div className="flex flex-wrap h-16 items-center container px-6 md:px-16 mx-auto w-full">
                <span className="w-auto font-bold" style={{ fontSize: "28px" }}>
                    <span className="text-white">Fate</span>
                    <span className="text-red-600">Series</span>
                </span>

                <div className="w-auto h-full ml-auto hidden lg:flex mr-20">
                    <NavbarCenterItem text="Home" isActive={currentPath === "/"} onClick={() => history.push("/")} />
                    <NavbarCenterItem text="Schedule" isActive={currentPath === "/schedule"} onClick={() => history.push("/schedule")} />
                    <NavbarCenterItem text="Our Blog" isActive={currentPath === "/our-blog"} onClick={() => history.push("/our-blog")} />
                    <NavbarCenterItem text="Staff" isActive={currentPath === "/staff"} onClick={() => history.push("/staff")} />
                </div>

                <div className="w-auto ml-auto flex">
                    <Icon icon={faSearch} className="text-white cursor-pointer" />
                    <Icon icon={faUser} className="text-white ml-6 cursor-pointer" />
                    <Icon icon={faBars} className="text-white ml-6 block lg:hidden cursor-pointer" onClick={() => dispatch(toggleNavbarDrop())} />
                </div>
            </div>

            <div className="w-full">
                <NavbarDrop isShown={isNavbarDropShown} />
            </div>
        </div>
    );
};

export default Navbar;
