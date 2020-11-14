import React from "react";
import { Helmet } from "react-helmet";
import { APP_NAME } from "../../helpers/contants";

const OurBlog = () => (
    <div>
        <Helmet>
            <title>Our Blog | {APP_NAME}</title>
        </Helmet>

        <div className="text-white h-screen pt-10">Our Blog</div>
    </div>
);

export default OurBlog;
