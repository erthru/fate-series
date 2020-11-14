import React from "react";
import { Helmet } from "react-helmet";
import { APP_NAME } from "../../helpers/contants";

const Staff = () => (
    <div>
        <Helmet>
            <title>Staff | {APP_NAME}</title>
        </Helmet>

        <div className="text-white h-screen pt-10">Staff</div>
    </div>
);

export default Staff;
