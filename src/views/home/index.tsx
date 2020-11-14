import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentPreview, { ContentPreviewMode } from "../../components/content-preview";
import Headlines from "../../components/headlines";
import MenuTitle from "../../components/menu-title";
import ProgressBar from "../../components/progress-bar";
import Icon from "../../components/ui/icon";
import { Store } from "../../plugins/store";
import { getContents, getTrendingContents } from "../../plugins/store/content/actions";
import { Content } from "../../plugins/store/content/types";
import { Helmet } from "react-helmet";
import { APP_NAME } from "../../helpers/contants";

const Home = () => {
    const dispatch = useDispatch();
    const contents = useSelector((store: Store) => store.content.contents) as Array<Content>;
    const trendingContents = useSelector((store: Store) => store.content.trendingContents) as Array<Content>;
    const [isFetchingContents, setIsFetchingContents] = useState(false);
    const [isFetchingTrending, setIsFetchingTrending] = useState(false);

    useEffect(() => {
        setIsFetchingContents(true);
        setIsFetchingTrending(true);

        dispatch(getContents());
        dispatch(getTrendingContents());
    }, [dispatch]);

    return (
        <div>
            <Helmet>
                <title>Home | {APP_NAME}</title>
            </Helmet>

            <div className="pt-6 md:pt-10 flex flex-wrap">
                <div className="w-full">
                    <Headlines />
                </div>

                <div className="w-full mt-16 flex flex-wrap">
                    <div className="w-full lg:w-8/12 lg:pr-4">
                        <div className="flex w-full items-center">
                            <MenuTitle title="CONTENTS" />

                            <div className="ml-auto flex items-center lg:pr-4 cursor-pointer">
                                <span className="text-white text-sm pr-3">VIEW ALL</span>
                                <Icon icon={faArrowRight} className="text-white text-sm" />
                            </div>
                        </div>

                        {isFetchingContents && contents.length === 0 ? (
                            <div className="w-full flex mt-8">
                                <ProgressBar color="white" className="mx-auto" />
                            </div>
                        ) : null}

                        <div className="flex flex-wrap md:-mr-6 lg:mr-0">
                            {contents.map((content) => (
                                <div className="w-full md:w-1/3 md:pr-6 mt-8" key={content.id}>
                                    <ContentPreview content={content} mode={ContentPreviewMode.vertical} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-4/12 mt-8 lg:mt-0">
                        <MenuTitle title="TRENDING" />

                        {isFetchingTrending && trendingContents.length === 0 ? (
                            <div className="w-full flex mt-8">
                                <ProgressBar color="white" className="mx-auto" />
                            </div>
                        ) : null}

                        <div className="flex flex-wrap">
                            {trendingContents.map((trendingContent) => (
                                <div className="w-full mt-8" key={trendingContent.id}>
                                    <ContentPreview content={trendingContent} mode={ContentPreviewMode.horizontal} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
