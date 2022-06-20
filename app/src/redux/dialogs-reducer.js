const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: 'Ivan' },
        { id: 2, name: 'Natali' },
        { id: 3, name: 'Maksim' },
        { id: 4, name: 'Alina' },
        { id: 5, name: 'Lena' },
        { id: 6, name: 'Dima' }
    ],
    messages: [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Как дела' },
        { id: 3, message: 'Нас тут много' },
        { id: 4, message: 'Вау...' }
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;