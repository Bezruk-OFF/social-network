import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import job from '../../../assets/images/looking-for-a-job.jpeg'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    let contacts = [];
    for (let key in props.profile.contacts) {
        if (props.profile.contacts[key]) {
            contacts.push(<a href={props.profile.contacts[key]} target="_blank">{key}</a>);
        }
    }

    return (
        <div>
            <div className={classes.discriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="user photo" className={classes.userPhoto} />
                <h2>{props.profile.fullName}</h2>
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
                <span>{props.profile.aboutMe}</span>
                <br />
                <div className={classes.contacts}>{contacts}</div>
                <br />
                <div >
                    <img src={job} alt="" className={classes.job} />
                </div >
            </div>
        </div >
    )
}

export default ProfileInfo;