import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb, { BreadcrumbItem } from "../../components/breadcrumb";
import ProgressBar from "../../components/ui/progress-bar";
import VideoStreamer from "../../components/video-streamer";
import { Store } from "../../plugins/store";
import { getContent } from "../../plugins/store/content/actions";
import { Content } from "../../plugins/store/content/types";

type Params = {
    id: string;
};

const Show = () => {
    const { id } = useParams<Params>();
    const dispatch = useDispatch();
    const content = useSelector((store: Store) => store.content.content) as Content;
    const [isFetchingContent, setIsFetchingContent] = useState(false);
    const breadcrumbItems: Array<BreadcrumbItem> = [
        {
            text: "Contents",
            url: "/contents",
        },
        {
            text: content.title!!,
            url: "",
        },
    ];

    useEffect(() => {
        setIsFetchingContent(true);
        dispatch(getContent(parseInt(id)));
    }, [dispatch]);

    return (
        <div className="pt-10 flex flex-wrap">
            {isFetchingContent && content.id === undefined ? <ProgressBar className="mx-auto" color="white" /> : null}

            <div className="w-full">
                <Breadcrumb items={breadcrumbItems} />
            </div>

            <div className="w-full mt-10">
                <VideoStreamer url={content.video!!} thumbnail={content.thumb!!} />
            </div>
        </div>
    );
};

export default Show;
