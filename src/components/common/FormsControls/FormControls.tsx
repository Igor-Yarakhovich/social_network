import React from "react";
import {WrappedFieldProps} from "redux-form/lib/Field";
import styles from './FormControls.module.css'

type PropsType = {
    FormType: any
}

export const FormControl: React.FC<WrappedFieldProps & PropsType> = ({input, meta, FormType, ...props}) => {
    const hasError = meta.touched && meta.error
    const FinalClass = `${styles.formControl} ${hasError ? styles.error : ''}`
    return (
        <div className={FinalClass}>
            <div>
                <FormType {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: WrappedFieldProps) => {
    return <FormControl {...props} FormType="textarea"/>
}

export const Input = (props: WrappedFieldProps) => {
    return <FormControl {...props} FormType="input"/>
}

