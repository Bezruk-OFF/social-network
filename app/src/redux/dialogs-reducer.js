const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });

export default dialogsReducer;