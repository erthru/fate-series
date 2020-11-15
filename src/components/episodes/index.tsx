import React, { useEffect } from "react";
import { useState } from "react";
import EpisodeButton from "../episode-button";

type Props = {
    total: number;
};

const Episodes = (props: Props) => {
    const [Episodes, setEpisodes] = useState<Array<JSX.Element>>();

    useEffect(() => {
        setEpisodes([]);

        const EpisodesTemp: Array<JSX.Element> = [];

        for (let i = 0; i < props.total; i++) {
            const El = (
                <div className="pr-3 mt-4" key={i}>
                    <EpisodeButton text={(i + 1).toString()} />
                </div>
            );

            EpisodesTemp.push(El);
        }

        setEpisodes(EpisodesTemp);
    }, []);

    return <div className="w-full flex flex-wrap">{Episodes}</div>;
};

export default Episodes;
