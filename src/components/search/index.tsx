import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Icon from "../icon";

type Props = {
    isShown: boolean;
    onCloseClick?(): void;
};

const Search = (props: Props) => {
    const [keywords, setKeywords] = useState("");

    return props.isShown ? (
        <div className="bg-almost-black-600 fixed h-screen w-screen fade-0-2" style={{ zIndex: 9991 }}>
            <div className="flex w-full">
                <div className="rounded-full h-12 w-12 bg-almost-black-400 flex items-center mx-auto mt-8 cursor-pointer" onClick={props.onCloseClick}>
                    <Icon icon={faTimes} className="text-white mx-auto text-xl" />
                </div>
            </div>

            <div className="flex w-full h-full items-center" style={{ marginTop: "-100px" }}>
                <input
                    type="text"
                    value={keywords}
                    onKeyPress={(e) => (e.key === "Enter" && keywords !== "" ? (window.location.href = "/search?keywords=" + keywords) : null)}
                    onChange={(e) => setKeywords(e.currentTarget.value)}
                    className="border-solid border-b-2 pb-1 border-almost-black-5 bg-transparent mx-auto w-1/3 font-light text-4xl focus:outline-none text-almost-black-5 placeholder-almost-black-5"
                    placeholder="Search Here ..."
                />
            </div>
        </div>
    ) : null;
};

export default Search;
