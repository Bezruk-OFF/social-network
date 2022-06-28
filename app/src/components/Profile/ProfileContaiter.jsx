import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        // let userId = this.props.match.params.userId;  // react router v5 
        let userId = this.props.router.params.userId;    // react router v6
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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
export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));      // react router v6