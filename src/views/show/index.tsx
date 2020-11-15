import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb, { BreadcrumbItem } from "../../components/breadcrumb";
import EpisodeButton from "../../components/episode-button";
import MenuTitle from "../../components/menu-title";
import ProgressBar from "../../components/progress-bar";
import MainVideoStreamer from "../../components/main-video-streamer";
import { Store } from "../../plugins/store";
import { getContent } from "../../plugins/store/content/actions";
import { Content, ContentType } from "../../plugins/store/content/types";
import { registerVideo } from "../../plugins/store/video-streamer/actions";

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

    const [Episodes, setEpisodes] = useState<Array<JSX.Element>>();

    useEffect(() => {
        setIsFetchingContent(true);
        dispatch(getContent(parseInt(id)));
    }, [dispatch]);

    useEffect(() => {
        dispatch(registerVideo(content.thumb!!, content.video!!, 1));

        setEpisodes([]);

        const EpisodesTemp: Array<JSX.Element> = [];

        for (let i = 0; i < content.totalEpisodes!!; i++) {
            const El = (
                <div className="pr-3 mt-4" key={i}>
                    <EpisodeButton text={(i + 1).toString()} />
                </div>
            );

            EpisodesTemp.push(El);
        }

        setEpisodes(EpisodesTemp);
    }, [content]);

    return (
        <div className="pt-10 flex flex-wrap">
            {isFetchingContent && content.id === undefined ? <ProgressBar className="mx-auto" color="white" /> : null}

            <div className="w-full">
                <Breadcrumb items={breadcrumbItems} />
            </div>

            <div className="w-full mt-10">
                <MainVideoStreamer />
            </div>

            {content.type === ContentType.series ? (
                <div>
                    <div className="w-full mt-10">
                        <MenuTitle title="Episodes" />
                    </div>

                    <div className="w-full mt-2 flex flex-wrap">{Episodes}</div>
                </div>
            ) : null}

            <div className="w-full mt-10">
                <MenuTitle title="Comments" />
            </div>

            <div className="w-full mt-10">
                <MenuTitle title="Add Comment" />
            </div>
        </div>
    );
};

export default Show;
