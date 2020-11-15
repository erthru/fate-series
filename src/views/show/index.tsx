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
import { Helmet } from "react-helmet";
import { APP_NAME } from "../../helpers/contants";
import Comments from "../../components/comments";
import Episodes from "../../components/episodes";

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

    useEffect(() => {
        dispatch(registerVideo(content.thumb!!, content.video!!, 1));
    }, [content]);

    return (
        <div>
            <Helmet>
                <title>{content.title + " | " + APP_NAME}</title>
            </Helmet>

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

                        <div className="w-full mt-2">
                            <Episodes total={content.totalEpisodes!!} />
                        </div>
                    </div>
                ) : null}

                <div className="w-full mt-10">
                    <MenuTitle title="Comments" />
                </div>

                <div className="mt-3 w-full">
                    <Comments />
                </div>

                <div className="w-full mt-10">
                    <MenuTitle title="Add Comment" />
                </div>
            </div>
        </div>
    );
};

export default Show;
