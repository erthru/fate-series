import { Content } from "../../store/content/types";
import IBaseResponse from "./baseResponse";

interface IFetchHeadlinesResponse extends IBaseResponse {
    contents: Array<Content>;
}

export default IFetchHeadlinesResponse;
