import {ComponentClass} from 'react';
import {ActionsType, newMessageAC} from "../../redux/messagesReducer";
import {connect} from "react-redux";
import {RootType} from "../../redux/store";
import {Messages} from "./Messages";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type mstpType = {
    messagesData: Array<MessageType>;
    dialogsData: Array<DialogType>
    isAuth: boolean
}

export type DialogType = {
    text: string
    id: string
}

export type MessageType = {
    name: string
    id: string
}

type mdtpType = {
    addMessage: (newMessageText: string) => void
}

let mapStateToProps = (state: RootType): mstpType => {
    return {
        messagesData: state.messagesPage.messagesData,
        dialogsData: state.messagesPage.dialogsData,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void): mdtpType => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(newMessageAC(newMessageText))
        }
    }
}

export const MessagesContainer = compose<ComponentClass>(
    connect<mstpType, mdtpType, {}, RootType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)

