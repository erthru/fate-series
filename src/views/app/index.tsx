import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "../home";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Show from "../show";
import NotFound from "../not-found";
import Icon from "../../components/icon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { unregisterVideo } from "../../plugins/store/video-streamer/actions";
import { Store } from "../../plugins/store";
import VideoStreamer, { VideoStreamerMode } from "../../components/video-streamer";

const App = () => {
    const location = useLocation();
    const timeToContiue = useSelector((store: Store) => store.videoStreamer.timeToContiue) as number;
    const dispatch = useDispatch();

    return (
        <div>
            {!location.pathname.includes("/show/") && timeToContiue > 0 ? (
                <div className="w-4/6 md:w-2/6 lg:1/12 h-auto fixed right-0 bottom-0" style={{ zIndex: 9991, marginBottom: "16px", marginRight: "16px" }}>
                    <div className="w-full h-full relative">
                        <div className="absolute right-0 mr-3 mt-2 z-10" onClick={() => dispatch(unregisterVideo())}>
                            <Icon icon={faTimes} className="text-white text-xl" />
                        </div>

                        <VideoStreamer mode={VideoStreamerMode.continue} />
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
