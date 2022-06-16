const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://games-of-thrones.ru/sites/default/files/pictures/all/Ivan/22.jpg',
            followed: false,
            fullName: 'Ivan',
            status: 'I am aboss',
            location: { city: 'Novosibirsk', country: 'Russia' }
        },
        {
            id: 2,
            photoUrl: 'https://games-of-thrones.ru/sites/default/files/pictures/all/Ivan/22.jpg',
            followed: true,
            fullName: 'Dima',
            status: 'I am aboss',
            location: { city: 'Minsk', country: 'Belarus' }
        },
        {
            id: 3,
            photoUrl: 'https://games-of-thrones.ru/sites/default/files/pictures/all/Ivan/22.jpg',
            followed: false,
            fullName: 'Alina',
            status: 'I am aboss',
            location: { city: 'Novosibirsk', country: 'Russia' }
        },
        {
            id: 4,
            photoUrl: 'https://games-of-thrones.ru/sites/default/files/pictures/all/Ivan/22.jpg',
            followed: false,
            fullName: 'Maksim',
            status: 'I am aboss',
            location: { city: 'Novosibirsk', country: 'Russia' }
        }
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;