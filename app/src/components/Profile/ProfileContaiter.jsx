import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from '../../hoc/withRouter';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        // let userId = this.props.match.params.userId;  // react router v5 
        let userId = this.props.router.params.userId;    // react router v6
        if (!userId) {
            userId = 24635
        }
        this.props.getUserProfile(userId);                  //  refactoring thunk-redux

        //     profileAPI.userProfile(userId)
        //         .then(data => {
        //             this.props.setUserProfile(data);
        //         });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);