import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from 'react';


let state = {
    posts: [
        {
            id: 1,
            message: 'Привет я тут впервые',
            likesCount: 1,
            avatar: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg'
        },
        {
            id: 2,
            message: 'Это самый крутой пост',
            likesCount: 99,
            avatar: 'https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg'
        },
        {
            id: 3,
            message: 'Всем привет',
            likesCount: 12,
            avatar: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg'
        }
    ]
};

it('результат теста 1', () => {
    // 1. test data
    let action = addPostActionCreator('tru lya lay');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

it('результат теста 2', () => {
    // 1. test data
    let action = addPostActionCreator('tru lya lay');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[3].message).toBe('tru lya lay');
});

it('результат теста 3', () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});