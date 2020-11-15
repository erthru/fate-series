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
import Icon from "../../components/icon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { unregisterVideo } from "../../plugins/store/video-streamer/actions";
import { Store } from "../../plugins/store";
import SecondaryVideoStreamer from "../../components/secondary-video-streamer";

const App = () => {
    const timeToContiue = useSelector((store: Store) => store.videoStreamer.timeToContiue) as number;
    const dispatch = useDispatch();

    return (
        <div>
            {timeToContiue > 0 ? (
                <div className="w-4/6 md:w-2/6 lg:1/12 h-auto fixed right-0 bottom-0" style={{ zIndex: 9991, marginBottom: "16px", marginRight: "16px" }}>
                    <div className="w-full h-full relative">
                        <div className="absolute right-0 mr-3 mt-2 z-10" onClick={() => dispatch(unregisterVideo())}>
                            <Icon icon={faTimes} className="text-white text-xl" />
                        </div>

                        <SecondaryVideoStreamer />
                    </div>
                </div>
            ) : null}

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
};

export default App;
