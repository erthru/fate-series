import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home";
import Navbar from "../../components/navbar";
import Schedule from "../schedule";
import OurBlog from "../our-blog";
import Staff from "../staff";
import { ROUTER_PATH } from "../../helpers/contants";

const App = () => (
    <div>
        <div className="flex flex-wrap">
            <Navbar />
        </div>

        <div className="px-6 md:px-16 pb-6 overflow-x-hidden">
            <Switch>
                <Route exact path={ROUTER_PATH.HOME} component={Home} />
                <Route path={ROUTER_PATH.SCHEDULE} component={Schedule} />
                <Route path={ROUTER_PATH.OUR_BLOG} component={OurBlog} />
                <Route path={ROUTER_PATH.STAFF} component={Staff} />
            </Switch>
        </div>
    </div>
);

export default App;
