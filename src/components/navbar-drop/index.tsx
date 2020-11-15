import React from "react";
import NavbarDropItem from "../navbar-drop-item";
import "./styles.css";

type Props = {
    isShown: boolean;
};

const NavbarDrop = (props: Props) => (
    <div className={"navbar-drop flex flex-wrap w-full bg-indigo-1500 container px-6 md:px-16 " + (props.isShown ? "navbar-drop-active" : "")}>
        <NavbarDropItem text="Home" to="/" />
        <NavbarDropItem text="Schedule" to="/schedule" />
        <NavbarDropItem text="Our Blog" to="/our-blog" />
        <NavbarDropItem text="Staff" to="/staff" />

        <div className="pb-2 w-full"></div>
    </div>
);

export default NavbarDrop;
