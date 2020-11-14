import { Content } from "../../store/content/types";
import IBaseResponse from "./baseResponse";

interface IFetchHeadlinesContentsResponse extends IBaseResponse {
    contents: Array<Content>;
}

export default IFetchHeadlinesContentsResponse;
