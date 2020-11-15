import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { getTrendingContents } from "../../plugins/store/content/actions";
import { Content } from "../../plugins/store/content/types";
import ContentPreview, { ContentPreviewMode } from "../content-preview";
import ProgressBar from "../ui/progress-bar";

const Trending = () => {
    const dispatch = useDispatch();
    const trendingContents = useSelector((store: Store) => store.content.trendingContents) as Array<Content>;
    const [isFetchingTrending, setIsFetchingTrending] = useState(false);

    useEffect(() => {
        setIsFetchingTrending(true);
        dispatch(getTrendingContents());
    }, [dispatch]);

    return (
        <div>
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
    );
};

export default Trending;
