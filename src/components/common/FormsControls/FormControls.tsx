import React from "react";
import {WrappedFieldProps} from "redux-form/lib/Field";

export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    return (
        <div>
            <textarea {...input} {...props}/>
        </div>
    )
}