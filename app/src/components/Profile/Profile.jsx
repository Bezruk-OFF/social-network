import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import React from 'react';

const Profile = ({ profile, status, updateUserStatus, store }) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} />
            <MyPostsContainer store={store} />
        </div>
    );
}

export default Profile;