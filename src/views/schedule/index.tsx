import React from "react";
import { Helmet } from "react-helmet";
import { APP_NAME } from "../../helpers/contants";

const Schedule = () => (
    <div>
        <Helmet>
            <title>Schedule | {APP_NAME}</title>
        </Helmet>

        <div className="text-white h-screen pt-10">Schedule</div>
    </div>
);

export default Schedule;
