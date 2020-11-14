import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ROUTER_PATH } from "../../helpers/contants";
import Icon from "../ui/icon";
import NavbarCenterItem from "./navbar-center-item";
import NavbarDrop from "./navbar-drop";

const Navbar = () => {
    const location = useLocation();
    const history = useHistory();
    const [currentPath, setCurrentPath] = useState("/");
    const [isNavDropShown, setIsNavDropShown] = useState(false);

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    const routeTo = (path: ROUTER_PATH) => {
        history.push(path);
    };

    return (
        <div className="w-full">
            <div className="flex flex-wrap h-16 items-center container px-6 md:px-16 mx-auto bg-indigo-1500 w-full">
                <span className="w-auto font-bold" style={{ fontSize: "28px" }}>
                    <span className="text-white">Fate</span>
                    <span className="text-red-600">Series</span>
                </span>

                <div className="w-auto h-full ml-auto hidden lg:flex">
                    <NavbarCenterItem text="Home" isActive={currentPath === ROUTER_PATH.HOME} onClick={() => routeTo(ROUTER_PATH.HOME)} />
                    <NavbarCenterItem text="Schedule" isActive={currentPath === ROUTER_PATH.SCHEDULE} onClick={() => routeTo(ROUTER_PATH.SCHEDULE)} />
                    <NavbarCenterItem text="Our Blog" isActive={currentPath === ROUTER_PATH.OUR_BLOG} onClick={() => routeTo(ROUTER_PATH.OUR_BLOG)} />
                    <NavbarCenterItem text="Staff" isActive={currentPath === ROUTER_PATH.STAFF} onClick={() => routeTo(ROUTER_PATH.STAFF)} />
                </div>

                <div className="w-auto ml-auto flex">
                    <Icon icon={faSearch} className="text-white cursor-pointer" />
                    <Icon icon={faUser} className="text-white ml-6 cursor-pointer" />
                    <Icon icon={faBars} className="text-white ml-6 block lg:hidden cursor-pointer" onClick={() => setIsNavDropShown(!isNavDropShown)} />
                </div>
            </div>

            <NavbarDrop isShown={isNavDropShown} />
        </div>
    );
};

export default Navbar;
