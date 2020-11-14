import { faCheck, faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { API_BASE_URL } from "../../helpers/contants";
import { Content } from "../../plugins/store/content/types";
import Icon from "../ui/icon";

type Props = {
    content: Content;
    mode: ContentPreviewMode;
};

export enum ContentPreviewMode {
    horizontal = "horizontal",
    vertical = "vertical",
}

const ContentPreview = (props: Props) => {
    return (
        <div className={"flex flex-wrap " + (props.mode === ContentPreviewMode.horizontal ? "cursor-pointer" : "")}>
            <div
                className="rounded-lg w-full bg-red-800"
                style={{
                    height: props.mode === ContentPreviewMode.vertical ? "300px" : "180px",
                    backgroundImage:
                        props.mode === ContentPreviewMode.vertical
                            ? "url(" + API_BASE_URL + "images/" + props.content.thumb + ")"
                            : "linear-gradient(to bottom, transparent 0%, black 120%), url(" + API_BASE_URL + "images/" + props.content.thumb + ")",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                }}
            >
                {props.mode === ContentPreviewMode.horizontal ? (
                    <div className="flex w-full">
                        <div className="pt-3 pl-3">
                            <span className="bg-red-600 px-2 py-1 text-white">{props.content.releaseYear}</span>
                        </div>

                        <div className="flex bg-gray-800 rounded text-sm px-2 items-center ml-auto" style={{ marginTop: "10px", paddingTop: "2px", marginRight: "16px", paddingBottom: "2px" }}>
                            <Icon icon={faCheck} className="text-white" />
                            <span className="text-white ml-1">{props.content.type}</span>
                        </div>
                    </div>
                ) : null}

                {props.mode === ContentPreviewMode.horizontal ? (
                    <div className="px-6 w-full relative">
                        <span className="text-white font-medium text-xl absolute top-0 truncate w-10/12" style={{ marginTop: "95px", marginRight: "14px" }}>
                            {props.content.title}
                        </span>
                    </div>
                ) : null}

                {props.mode === ContentPreviewMode.vertical ? (
                    <div className="pt-3 pl-3">
                        <span className="bg-red-600 px-2 py-1 text-white">{props.content.releaseYear}</span>
                    </div>
                ) : null}

                {props.mode === ContentPreviewMode.vertical ? (
                    <div className="h-full relative w-full">
                        <div className="absolute bottom-0 w-full">
                            <div className="flex w-full">
                                <div className="flex bg-gray-800 rounded text-sm px-2 items-center" style={{ marginBottom: "50px", marginLeft: "16px", paddingTop: "2px", paddingBottom: "2px" }}>
                                    <Icon icon={faEye} className="text-white" />
                                    <span className="text-white ml-1">{props.content.viewed}</span>
                                </div>

                                <div className="flex bg-gray-800 rounded text-sm px-2 items-center ml-auto" style={{ marginBottom: "50px", paddingTop: "2px", marginRight: "16px", paddingBottom: "2px" }}>
                                    <Icon icon={faCheck} className="text-white" />
                                    <span className="text-white ml-1">{props.content.type}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>

            {props.mode === ContentPreviewMode.vertical ? <span className="text-white font-medium text-xl mt-3 cursor-pointer">{props.content.title}</span> : null}
        </div>
    );
};

export default ContentPreview;
