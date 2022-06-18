import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, toggleFollowAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId))
        },
        // follow: (userId) => {
        //     dispatch(followAC(userId))
        // },
        // unfollow: (userId) => {
        //     dispatch(unfollowAC(userId))
        // },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;