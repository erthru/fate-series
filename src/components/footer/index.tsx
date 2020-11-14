import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../helpers/contants";
import Icon from "../ui/icon";

const Footer = () => {
    const history = useHistory();

    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;

        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };

    const routeTo = (path: ROUTER_PATH) => {
        history.push(path);
        scrollToTop();
    };

    return (
        <div className="h-48 w-full flex flex-wrap">
            <div className="w-full z-20">
                <div className="rounded-full bg-red-600 mx-auto flex items-center cursor-pointer" style={{ width: "56px", height: "56px" }} onClick={scrollToTop}>
                    <Icon icon={faChevronUp} className="text-white mx-auto text-2xl" />
                </div>
            </div>

            <div className="w-full h-auto lg:h-56 bg-indigo-1500 flex" style={{ marginTop: "-28px" }}>
                <div className="flex flex-wrap mx-auto items-center container px-6 md:px-16">
                    <div className="w-full flex lg:w-auto font-bold text-3xl mt-12 lg:mt-0">
                        <div className="mx-auto lg:mx-0">
                            <span className="text-white">Fate</span>
                            <span className="text-red-600">Series</span>
                        </div>
                    </div>

                    <div className="w-full lg:w-auto lg:ml-auto flex flex-wrap mt-3 lg:mt-0 lg:pl-16">
                        <div className="w-full lg:w-auto flex">
                            <span className="text-gray-500 mx-auto hover:text-gray-600 cursor-pointer" onClick={() => routeTo(ROUTER_PATH.HOME)}>
                                Homepage
                            </span>
                        </div>

                        <div className="w-full lg:w-auto lg:ml-4 flex">
                            <span className="text-gray-500 mx-auto hover:text-gray-600 cursor-pointer" onClick={() => routeTo(ROUTER_PATH.SCHEDULE)}>
                                Schedule
                            </span>
                        </div>

                        <div className="w-full lg:w-auto lg:ml-4 flex">
                            <span className="text-gray-500 mx-auto hover:text-gray-600 cursor-pointer" onClick={() => routeTo(ROUTER_PATH.OUR_BLOG)}>
                                Our Blog
                            </span>
                        </div>

                        <div className="w-full lg:w-auto lg:ml-4 flex">
                            <span className="text-gray-500 mx-auto hover:text-gray-600 cursor-pointer" onClick={() => routeTo(ROUTER_PATH.STAFF)}>
                                Staff
                            </span>
                        </div>
                    </div>

                    <div className="mx-auto lg:mx-0 text-center lg:text-left lg:ml-auto w-auto mt-4 mx:mt-0 pb-6 lg:pb-0">
                        <p className="text-gray-800 font-light">
                            Template inspired from colorlib.
                            <br />
                            All created with ♥
                            <br />
                            Check this on{" "}
                            <a className="text-blue-500" target="blank" href="https://github.com/erthru/fate-series">
                                Github
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
