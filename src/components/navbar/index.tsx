import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Icon from "../icon";
import NavbarItem, { NavbarItemMode } from "../navbar-item";
import "./styles.css";

const Navbar = () => {
    type _NavbarItem = {
        text: string;
        to: string;
    };

    const navbarItems: Array<_NavbarItem> = [
        {
            text: "Home",
            to: "/",
        },
        {
            text: "Schedule",
            to: "/schedule",
        },
        {
            text: "Our Blog",
            to: "/our-blog",
        },
        {
            text: "Staff",
            to: "/staff",
        },
    ];

    const [isDropShown, setIsDropShown] = useState(false);

    return (
        <div className="w-full flex flex-wrap bg-indigo-1500">
            <div className="flex flex-wrap h-16 items-center container px-6 md:px-16 mx-auto w-full">
                <span className="w-auto font-bold" style={{ fontSize: "28px" }}>
                    <span className="text-white">Fate</span>
                    <span className="text-red-600">Series</span>
                </span>

                <div className="w-auto h-full ml-auto hidden lg:flex mr-20">
                    {navbarItems.map((navbarItem) => (
                        <NavbarItem text={navbarItem.text} to={navbarItem.to} mode={NavbarItemMode.vertical} />
                    ))}
                </div>

                <div className="w-auto ml-auto flex">
                    <Icon icon={faSearch} className="text-white cursor-pointer" />
                    <Icon icon={faUser} className="text-white ml-6 cursor-pointer" />
                    <Icon icon={faBars} className="text-white ml-6 block lg:hidden cursor-pointer" onClick={() => setIsDropShown(!isDropShown)} />
                </div>
            </div>

            <div className={"w-full flex flex-wrap container px-6 md:px-16 " + (isDropShown ? "drop-active pb-4" : "drop")} onClick={() => setIsDropShown(false)}>
                {navbarItems.map((navbarItem) => (
                    <NavbarItem text={navbarItem.text} to={navbarItem.to} mode={NavbarItemMode.horizontal} />
                ))}
            </div>
        </div>
    );
};

export default Navbar;
