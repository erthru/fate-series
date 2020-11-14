import React from "react";
import Headlines from "../../components/headlines";
import { Helmet } from "react-helmet";
import { APP_NAME } from "../../helpers/contants";
import Trending from "../../components/trending";
import Contents from "../../components/contents";

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
                    <Contents />
                </div>

                <div className="w-full lg:w-4/12 mt-8 lg:mt-0">
                    <Trending />
                </div>
            </div>
        </div>
    </div>
);

export default Home;
