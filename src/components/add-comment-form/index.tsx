import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Store } from "../../plugins/store";
import { addAnonymousComment } from "../../plugins/store/comment/actions";
import Button from "../button";
import Icon from "../icon";
import Input from "../input";

type Params = {
    id: string;
};

const AddCommentForm = () => {
    const [isSubmiting, setIsSubmitting] = useState(false);
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    const { id } = useParams<Params>();
    const isCommentAdded = useSelector((store: Store) => store.comment.isCommentAdded) as boolean;

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (comment !== "") {
            setIsSubmitting(true);
            dispatch(addAnonymousComment(comment, id));
        }
    };

    useEffect(() => {
        if (isCommentAdded) {
            setIsSubmitting(false);
            setComment("");
        }
    }, [isCommentAdded]);

    return (
        <div className="flex flex-wrap w-full">
            <form onSubmit={onSubmit} className="w-full">
                <Input placeholder="Your Comment" className="h-32" isTextArea required value={comment} onChange={(e) => setComment(e.currentTarget.value)} />

                <Button type="submit" className="mt-4 w-full md:w-auto" color="red-600" isLoading={isSubmiting}>
                    <Icon icon={faPaperPlane} className="text-white" />
                    <span className="ml-2">SUBMIT</span>
                </Button>
            </form>
        </div>
    );
};

export default AddCommentForm;
