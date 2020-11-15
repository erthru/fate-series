import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import Icon from "../ui/icon";

type Props = {
    items: Array<BreadcrumbItem>;
};

export type BreadcrumbItem = {
    text: string;
    url: string;
};

const Breadcrumb = (props: Props) => (
    <div className="flex flex-wrap w-full items-center">
        <Icon icon={faHome} className="text-red-600" />

        <Link className="text-gray-400 ml-4 cursor-pointer" to="/">
            Home
        </Link>

        {props.items.map((item, index) => (
            <div>
                <Icon icon={faChevronRight} className="text-gray-400 ml-3 text-sm" />

                {index === props.items.length - 1 ? <span className="ml-3 text-gray-600">{item.text}</span> : null}

                {index !== props.items.length - 1 ? (
                    <Link className="ml-3 text-gray-400 cursor-pointer" to={item.url}>
                        {item.text}
                    </Link>
                ) : null}
            </div>
        ))}
    </div>
);

export default Breadcrumb;
