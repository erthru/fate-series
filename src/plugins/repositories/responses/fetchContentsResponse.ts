import { Content } from "../../store/content/types";
import IBaseResponse from "./baseResponse";

interface IFetchContentsResponse extends IBaseResponse {
    contents: Array<Content>;
}

export default IFetchContentsResponse;
