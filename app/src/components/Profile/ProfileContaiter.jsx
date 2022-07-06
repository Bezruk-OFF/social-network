import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { userProfile } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams, } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        // let userId = this.props.match.params.userId;  // react router v5 
        let userId = this.props.router.params.userId;    // react router v6
        if (!userId) {
            userId = 24635
        }
        this.props.userProfile(userId);                  //  refactoring thunk-redux

        //     profileAPI.userProfile(userId)
        //         .then(data => {
        //             this.props.setUserProfile(data);
        //         });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
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
export default connect(mapStateToProps, { userProfile })(withRouter(ProfileContainer));      // react router v6