import classes from './../Dialogs.module.css';

const Message = ({ message }) => {
    return (
        <div className={classes.dialog}>{message}</div >
    );
}

export default Message