import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useHistory } from "react-router-dom";
import Icon from "../ui/icon";

type Props = {
    items: Array<BreadcrumbItem>;
};

export type BreadcrumbItem = {
    text: string;
    url: string;
};

const Breadcrumb = (props: Props) => {
    const history = useHistory();

    const routeTo = (path: string) => {
        history.push(path);
    };

    return (
        <div className="flex flex-wrap w-full items-center">
            <Icon icon={faHome} className="text-red-600" />
            
            <span className="text-gray-400 ml-4 cursor-pointer" onClick={() => routeTo("/")}>
                Home
            </span>

            {props.items.map((item, index) => (
                <div>
                    <Icon icon={faChevronRight} className="text-gray-400 ml-3 text-sm" />
                    <span className={"ml-3 " + (index === props.items.length - 1 ? "text-gray-600" : "text-gray-400 cursor-pointer")} onClick={() => (index !== props.items.length - 1 ? routeTo(item.url) : null)}>
                        {item.text}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Breadcrumb;
