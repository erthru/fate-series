import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home";
import Navbar from "../../components/navbar";
import Schedule from "../schedule";
import OurBlog from "../our-blog";
import Staff from "../staff";
import Footer from "../../components/footer";
import Show from "../show";
import NotFound from "../not-found";

const App = () => (
    <div>
        <div className="flex flex-wrap">
            <Navbar />
        </div>

        <div className="pb-6 overflow-x-hidden">
            <div className="container px-6 md:px-16 mx-auto">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/schedule" component={Schedule} />
                    <Route path="/our-blog" component={OurBlog} />
                    <Route path="/staff" component={Staff} />
                    <Route path="/show/:id" component={Show} />
                    <Route path="/*" component={NotFound} />
                </Switch>
            </div>
        </div>

        <Footer />
    </div>
);

export default App;
