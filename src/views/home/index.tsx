import React from "react";
import Headlines from "../../components/headlines";
import { Helmet } from "react-helmet";
import { APP_NAME } from "../../helpers/contants";
import Contents, { ContentsFetch, ContentsMode } from "../../components/contents";
import MenuTitle from "../../components/menu-title";

const Home = () => (
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
                    <div className="flex w-full">
                        <MenuTitle title="CONTENTS" />
                    </div>

                    <Contents mode={ContentsMode.grid} fetch={ContentsFetch.contents} />
                </div>

                <div className="w-full lg:w-4/12 mt-8 lg:mt-0">
                    <div className="w-full">
                        <MenuTitle title="TRENDING" />
                    </div>

                    <Contents mode={ContentsMode.list} fetch={ContentsFetch.trending} />
                </div>
            </div>
        </div>
    </div>
);

export default Home;
