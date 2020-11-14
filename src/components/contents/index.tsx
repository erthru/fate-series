import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { getContents } from "../../plugins/store/content/actions";
import { Content } from "../../plugins/store/content/types";
import ContentPreview, { ContentPreviewMode } from "../content-preview";
import MenuTitle from "../menu-title";
import ProgressBar from "../progress-bar";
import Icon from "../ui/icon";

const Contents = () => {
    const dispatch = useDispatch();
    const contents = useSelector((store: Store) => store.content.contents) as Array<Content>;
    const [isFetchingContents, setIsFetchingContents] = useState(false);

    useEffect(() => {
        setIsFetchingContents(true);
        dispatch(getContents());
    }, [dispatch]);

    return (
        <div>
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
    );
};

export default Contents;
