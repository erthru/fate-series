import React from "react";

type Props = {
    type?: string;
    required?: boolean;
    isTextArea?: boolean;
    placeholder?: string;
    className?: string;
    onChange?(e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>): void;
    value?: string;
};

const Input = (props: Props) => {
    const classes = "rounded-lg bg-white w-full h-full px-4 py-2";

    return (
        <div className={"w-full " + props.className}>
            {!props.isTextArea ? (
                <input className={classes} type={props.type} required={props.required} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
            ) : (
                <textarea className={classes} required={props.required} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
            )}
        </div>
    );
};

export default Input;
