import dotenv from "dotenv";

dotenv.config();

export enum ROUTER_PATH {
    HOME = "/",
    SCHEDULE = "/schedule",
    OUR_BLOG = "/our-blog",
    STAFF = "/staff",
}

export const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL as unknown) as string;
