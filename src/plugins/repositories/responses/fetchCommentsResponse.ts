import { Comment } from "../../store/comment/types";
import IBaseResponse from "./baseResponse";

interface IFetchCommentsResponse extends IBaseResponse {
    comments: Array<Comment>;
}

export default IFetchCommentsResponse;
