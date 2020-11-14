import React from "react";
import { useParams } from "react-router-dom";

type Params = {
    id: string;
};

const Show = () => {
    const { id } = useParams<Params>();

    return <div className="h-screen pt-10 text-white">showing {id}</div>;
};

export default Show;
