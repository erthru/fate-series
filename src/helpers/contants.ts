import dotenv from "dotenv";

dotenv.config();

export const APP_NAME = (process.env.REACT_APP_APP_NAME as unknown) as string;
export const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL as unknown) as string;
