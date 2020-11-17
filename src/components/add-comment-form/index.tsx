import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Button from "../button";
import Icon from "../icon";
import Input from "../input";

const AddCommentForm = () => {
    const [isSubmiting, setIsSubmitting] = useState(false);
    const [comment, setComment] = useState("");

    return (
        <div className="flex flex-wrap w-full">
            <Input placeholder="Your Comment" className="h-32" isTextArea required value={comment} onChange={(e) => setComment(e.currentTarget.value)} />

            <Button type="button" className="mt-4 w-full md:w-auto" color="red-600" isLoading={isSubmiting} onClick={() => setIsSubmitting(true)}>
                <Icon icon={faPaperPlane} className="text-white" />
                <span className="ml-2">SUBMIT</span>
            </Button>
        </div>
    );
};

export default AddCommentForm;
