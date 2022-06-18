const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !u.followed }
                    }
                    return u;
                })
            }

        // case FOLLOW:
        //     return {
        //         ...state,
        //         // users: [...state.users],
        //         users: state.users.map(u => {
        //             if (u.id === action.userId) {
        //                 return { ...u, followed: true }
        //             }
        //             return u;
        //         })
        //     }

        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         // users: [...state.users],
        //         users: state.users.map(u => {
        //             if (u.id === action.userId) {
        //                 return { ...u, followed: false }
        //             }
        //             return u;
        //         })
        //     }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]  // вот так у Димыча и дублируется usrs на странице
                // users: [...action.users]  // вот решается проблема сдублированием users на странице
            }

        default:
            return state;
    }
};

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
// export const followAC = (userId) => ({ type: FOLLOW, userId });
// export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;