import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormControls";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

type MessageFormPropsType = {
    handleSubmit: any
}

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm = (props: MessageFormPropsType) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   validate={[required, maxLength50]}
                   name='newMessageText'
                   placeholder='Enter your message'
            />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

export const MessageReduxForm = reduxForm({
    form: 'messageForm'
})(AddMessageForm)