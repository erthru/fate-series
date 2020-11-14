import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentPreview, { ContentPreviewMode } from "../../components/content-preview";
import Headlines from "../../components/headlines";
import MenuTitle from "../../components/menu-title";
import ProgressBar from "../../components/progress-bar";
import Icon from "../../components/ui/icon";
import { Store } from "../../plugins/store";
import { getContents, getTrending } from "../../plugins/store/content/actions";
import { Content } from "../../plugins/store/content/types";

const Home = () => {
    const dispatch = useDispatch();
    const contents = useSelector((store: Store) => store.content.contents) as Array<Content>;
    const trending = useSelector((store: Store) => store.content.trending) as Array<Content>;
    const [isFetchingContents, setIsFetchingContents] = useState(false);
    const [isFetchingTrending, setIsFetchingTrending] = useState(false);

    useEffect(() => {
        setIsFetchingContents(true);
        setIsFetchingTrending(true);

        dispatch(getContents());
        dispatch(getTrending());
    }, [dispatch]);

    return (
        <div className="pt-4 md:pt-10 flex flex-wrap">
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

                    <div className="flex flex-wrap mt-2 md:-mr-6 lg:mr-0">
                        {contents.map((content) => (
                            <div className="w-full md:w-1/3 md:pr-6 mt-4" key={content.id}>
                                <ContentPreview content={content} mode={ContentPreviewMode.vertical} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-4/12 mt-8 lg:mt-0">
                    <MenuTitle title="TRENDING" />

                    {isFetchingTrending && trending.length === 0 ? (
                        <div className="w-full flex mt-8">
                            <ProgressBar color="white" className="mx-auto" />
                        </div>
                    ) : null}

                    <div className="flex flex-wrap mt-2">
                        {trending.map((content) => (
                            <div className="w-full mt-4" key={content.id}>
                                <ContentPreview content={content} mode={ContentPreviewMode.horizontal} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
