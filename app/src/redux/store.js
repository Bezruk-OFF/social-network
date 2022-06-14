import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Привет я тут впервые',
                    likesCount: 1,
                    avatar: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg'
                },
                {
                    id: 2,
                    message: 'Это самый крутй пост',
                    likesCount: 99,
                    avatar: 'https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg'
                },
                {
                    id: 3,
                    message: 'Всем привет',
                    likesCount: 12,
                    avatar: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg'
                }
            ],
            newPostText: '0'
        },
        dialogsPage: {
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
                { id: 2, message: 'Как деда' },
                { id: 3, message: 'Нас тут много' },
                { id: 4, message: 'Вау...' }
            ],
            newMessageText: '0'
        },

        sidebar: {
            avatar: [
                { id: 1, avatar: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg' },
                { id: 2, avatar: 'https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg' },
                { id: 3, avatar: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg' },
                { id: 4, avatar: 'https://pbs.twimg.com/media/EQP9bQGWAAE9bbZ.jpg' },
                { id: 5, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemptcGoTPz0dHZyiRkcPImp-y8tOX5VGLiA&usqp=CAU' },
                { id: 6, avatar: 'https://android-obzor.com/wp-content/uploads/2022/02/13-6.jpg' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //     let newPost = {
    //         id: 4,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //         avatar: 'https://pbs.twimg.com/media/EQP9bQGWAAE9bbZ.jpg'
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    // addMessage() {
    //     let newMessage = {
    //         id: 4,
    //         message: this._state.dialogsPage.newMessageText
    //     }
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },

    // updateNewMessageText(newText) {
    //     this._state.dialogsPage.newMessageText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;