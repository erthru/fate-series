import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Icon from "../ui/icon";

const Footer = () => {
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;

        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 16);
        }
    };

    return (
        <div className="h-48 w-full flex flex-wrap">
            <div className="rounded-full bg-red-600 mx-auto z-20 flex items-center cursor-pointer" style={{ width: "56px", height: "56px" }} onClick={scrollToTop}>
                <Icon icon={faChevronUp} className="text-white mx-auto text-2xl" />
            </div>

            <div className="w-full h-56 bg-indigo-1500" style={{ marginTop: "-28px" }}></div>
        </div>
    );
};

export default Footer;
