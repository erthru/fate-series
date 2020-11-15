import React from "react";
import Headlines from "../../components/headlines";
import { Helmet } from "react-helmet";
import { APP_NAME } from "../../helpers/contants";
import Trending from "../../components/trending";
import Contents from "../../components/contents";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MenuTitle from "../../components/menu-title";
import Icon from "../../components/ui/icon";

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
                    <div className="flex w-full items-center">
                        <MenuTitle title="CONTENTS" />

                        <div className="ml-auto flex items-center lg:pr-4 cursor-pointer">
                            <span className="text-white text-sm pr-3">VIEW ALL</span>
                            <Icon icon={faArrowRight} className="text-white text-sm" />
                        </div>
                    </div>

                    <Contents />
                </div>

                <div className="w-full lg:w-4/12 mt-8 lg:mt-0">
                    <div className="w-full">
                        <MenuTitle title="TRENDING" />
                    </div>
                    
                    <Trending />
                </div>
            </div>
        </div>
    </div>
);

export default Home;
