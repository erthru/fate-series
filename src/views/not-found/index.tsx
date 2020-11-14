import React from "react";

const NotFound = () => (
    <div className="h-screen w-full pt-4">
        <div className="flex flex-wrap w-full">
            <div className="flex w-full">
                <span className="text-6xl text-white font-bold mx-auto">404</span>
            </div>

            <div className="flex w-full">
                <span className="text-lg text-white font-medium mx-auto">Requested Page Not Found</span>
            </div>
        </div>
    </div>
);

export default NotFound;
