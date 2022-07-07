import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageText = state.newMessageText;

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    if (!props.isAuth) return <Navigate to="/login" />;

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={newMessageText} />
                </div>
                <div>
                    <button onClick={onAddMessage}>добавить сообщение</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;