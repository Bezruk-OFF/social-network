import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default DialogsContainer;