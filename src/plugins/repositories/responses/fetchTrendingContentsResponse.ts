import { Content } from "../../store/content/types";
import IBaseResponse from "./baseResponse";

interface IFetchTrendingContentsResponse extends IBaseResponse {
    contents: Array<Content>;
}

export default IFetchTrendingContentsResponse;
