import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams, Navigate } from "react-router-dom";

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
        if (!this.props.isAuth) return <Navigate to="/login" />;

        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

// let WithDataUrlContainerComponent = withRouter(ProfileContainer);  // react router v5

function withRouter(ProfileContainer) {                               // react router v6
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <ProfileContainer
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

// export default connect(mapStateToProps, { setUserProfile })(WithDataUrlContainerComponent);  // react router v5
export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));      // react router v6