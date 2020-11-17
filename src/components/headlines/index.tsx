import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Store } from "../../plugins/store";
import { getHeadlinesContents } from "../../plugins/store/content/actions";
import { Content } from "../../plugins/store/content/types";
import ProgressBar from "../progress-bar";
import Icon from "../icon";
import "./styles.css";

const Headlines = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const headlinesContents = useSelector((store: Store) => store.content.headlinesContents) as Array<Content>;
    const [headlinesPosition, setHeadlinesPosition] = useState(0);
    const [fade, setFade] = useState("fade-1-5");

    useEffect(() => {
        dispatch(getHeadlinesContents());
    }, []);

    const moveSliderPosition = (position: number) => {
        setFade("");

        setTimeout(() => {
            setFade("fade-1-5");
        }, 0);

        setHeadlinesPosition(position < 0 ? headlinesContents.length - 1 : position > headlinesContents.length - 1 ? 0 : position);
    };

    return (
        <div className="h-auto flex items-center headlines-padding-on-random lg:-mx-8">
            <div className="bg-indigo-1400 transform rotate-45 hidden lg:block cursor-pointer" style={{ zIndex: 999, width: "70px", height: "70px", padding: "6px" }} onClick={() => moveSliderPosition(headlinesPosition - 1)}>
                <div className="w-full h-full bg-indigo-1000 flex items-center">
                    <Icon icon={faChevronLeft} className="text-white text-xl mx-auto transform -rotate-45" />
                </div>
            </div>

            <div className="w-full bg-red-900 rounded-lg img-on-center overflow-hidden flex flex-wrap items-center" style={{ height: "550px", zIndex: 998 }}>
                {headlinesContents.length === 0 ? (
                    <div className="mx-auto">
                        <ProgressBar color="white" size="4xl" />
                    </div>
                ) : null}

                {headlinesContents.length > 0 ? (
                    <div className="w-full">
                        <div
                            className={"w-full " + fade}
                            style={{
                                backgroundImage: "linear-gradient(to bottom, transparent 0%, black 120%), url(" + headlinesContents[headlinesPosition].thumb + ")",
                                width: "100%",
                                height: "550px",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                            }}
                        ></div>

                        <div className={"w-full flex " + fade}>
                            <div className="h-8 ml-6 pr-6 lg:ml-16 lg:pr-16 flex flex-wrap w-full" style={{ marginTop: "-280px" }}>
                                <span className="px-4 py-1 bg-white text-orange-600 text-sm">Adventure</span>
                                <span className="w-full mr-10 text-white mt-2 text-5xl font-bold truncate">{headlinesContents[headlinesPosition].title}</span>
                                <span className="w-full mr-10 text-white text-sm truncate">{headlinesContents[headlinesPosition].description}</span>

                                <div className="w-full mt-6">
                                    <button className="flex cursor-pointer" onClick={() => history.push("/show/" + headlinesContents[headlinesPosition].id)}>
                                        <div className="bg-red-600 px-3 rounded-l-lg text-white font-bold h-12 flex items-center">WATCH NOW</div>

                                        <div className="w-6 bg-red-600 ml-1 rounded-r-lg flex items-center h-12">
                                            <Icon icon={faChevronRight} className="text-white mx-auto" />
                                        </div>
                                    </button>
                                </div>

                                <div className="w-auto mt-8 flex mx-auto">
                                    {headlinesContents.map((_, index) => (
                                        <div className="px-1" key={index}>
                                            <div className={"cursor-pointer rounded-full " + (index === headlinesPosition ? "bg-white" : "bg-gray-600")} style={{ width: "8px", height: "8px" }} onClick={() => moveSliderPosition(index)}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>

            <div className="bg-indigo-1400 transform rotate-45 hidden lg:block cursor-pointer" style={{ zIndex: 999, width: "70px", height: "70px", padding: "6px" }} onClick={() => moveSliderPosition(headlinesPosition + 1)}>
                <div className="w-full h-full bg-indigo-1000 flex items-center">
                    <Icon icon={faChevronRight} className="text-white text-xl mx-auto transform -rotate-45" />
                </div>
            </div>
        </div>
    );
};

export default Headlines;
