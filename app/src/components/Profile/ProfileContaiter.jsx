import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from '../../hoc/withRouter';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        // let userId = this.props.match.params.userId;  // react router v5 
        let userId = this.props.router.params.userId;    // react router v6
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {                             // делаем redirect  на  login через props
                this.props.histry.push('/login');      //
            }
        }

        //     profileAPI.userProfile(userId)
        //         .then(data => {
        //             this.props.setUserProfile(data);
        //         });
        this.props.getUserProfile(userId);                  //  refactoring thunk-redux
        this.props.getUserStatus(userId);
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);