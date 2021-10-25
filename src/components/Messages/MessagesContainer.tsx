import React from 'react';
import {changeNewMessageTextAC, newMessageAC} from "../../redux/messagesReducer";
import {connect} from "react-redux";
import {RootType} from "../../redux/redux-store";
import {Messages} from "./Messages";
import {ActionsType, DialogType, MessageType} from "../../redux/types";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type mstpType = {
    messagesData: Array<MessageType>;
    newMessageText: string;
    dialogsData: Array<DialogType>
    isAuth: boolean
}

type mdtpType = {
    addMessage: (newMessageText: string) => void
    onMessageOnchange: (text: string) => void
}

let mapStateToProps = (state: RootType): mstpType => {
    return {
        messagesData: state.messagesPage.messagesData,
        dialogsData: state.messagesPage.dialogsData,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void): mdtpType => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(newMessageAC(newMessageText))
        },
        onMessageOnchange: (text: string) => {
            dispatch(changeNewMessageTextAC(text))
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Messages)

export const MessagesContainer = connect<mstpType, mdtpType, {}, RootType>(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)