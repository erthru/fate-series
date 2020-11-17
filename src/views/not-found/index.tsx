import React from "react";
import { Helmet } from "react-helmet";
import { APP_NAME } from "../../helpers/environtment";

const NotFound = () => (
    <div>
        <Helmet>
            <title>Not Found | {APP_NAME}</title>
        </Helmet>

        <div className="h-screen w-full pt-4 md:pt-16">
            <div className="flex flex-wrap w-full">
                <div className="flex w-full">
                    <span className="text-6xl text-white font-bold mx-auto">404</span>
                </div>

                <div className="flex w-full">
                    <span className="text-lg text-white font-medium mx-auto">Requested Page Not Found</span>
                </div>
            </div>
        </div>
    </div>
);

export default NotFound;
