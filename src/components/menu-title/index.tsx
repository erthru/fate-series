import React from "react";

type Props = {
    title: string;
};

const MenuTitle = (props: Props) => (
    <div className="flex h-10 items-center">
        <div className="bg-red-600 w-1 h-full"></div>
        <span className="text-white font-bold text-2xl ml-4">{props.title}</span>
    </div>
);

export default MenuTitle;
