import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLength = maxLengthCreator(50);

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

    let AddMessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name={'newMessageBody'} placeholder={'Enter you message'}
                        validate={[required, maxLength]} />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        )
    }

    let AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>

        </div>
    )
}

export default Dialogs;