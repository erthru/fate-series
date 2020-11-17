import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { getContents, getTrendingContents } from "../../plugins/store/content/actions";
import { Content } from "../../plugins/store/content/types";
import ContentItem, { ContentItemMode } from "../content-item";
import ProgressBar from "../progress-bar";

type Props = {
    fetch: ContentsFetch;
    mode: ContentsMode;
};

export enum ContentsFetch {
    contents = "contents",
    trending = "trending",
}

export enum ContentsMode {
    grid = "grid",
    list = "list",
}

const Contents = (props: Props) => {
    const dispatch = useDispatch();
    const contents = useSelector((store: Store) => store.content.contents) as Array<Content>;
    const trendingContents = useSelector((store: Store) => store.content.trendingContents) as Array<Content>;
    const [requestedContents, setRequestedContents] = useState<Array<Content>>([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setRequestedContents([]);
        setIsFetching(true);

        if (props.fetch === ContentsFetch.contents) dispatch(getContents());
        else dispatch(getTrendingContents());
    }, []);

    useEffect(() => {
        if (props.fetch === ContentsFetch.contents) setRequestedContents(contents);
    }, [contents]);

    useEffect(() => {
        if (props.fetch === ContentsFetch.trending) setRequestedContents(trendingContents);
    }, [trendingContents]);

    return (
        <div>
            {isFetching && requestedContents.length === 0 ? (
                <div className="w-full flex mt-8">
                    <ProgressBar color="white" className="mx-auto" size="4xl" />
                </div>
            ) : null}

            <div className="flex flex-wrap md:-mr-6 lg:mr-0">
                {requestedContents.map((content) => (
                    <div className={"w-full mt-8 " + (props.mode === ContentsMode.grid ? "md:w-1/3 md:pr-6" : "")} key={content.id}>
                        <ContentItem content={content} mode={props.mode === ContentsMode.grid ? ContentItemMode.vertical : ContentItemMode.horizontal} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contents;
