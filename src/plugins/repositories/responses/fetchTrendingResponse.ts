import { Content } from "../../store/content/types";
import IBaseResponse from "./baseResponse";

interface IFetchTrendingResponse extends IBaseResponse {
    contents: Array<Content>;
}

export default IFetchTrendingResponse;
