import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import job from '../../../assets/images/looking-for-a-job.jpeg'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateUserStatus }) => {
    if (!profile) {
        return <Preloader />
    }

    let contacts = [];
    for (let key in profile.contacts) {
        if (profile.contacts[key]) {
            contacts.push(<a href={profile.contacts[key]} target="_blank">{key}</a>);
        }
    }

    return (
        <div>
            <div className={classes.discriptionBlock}>
                <img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt="user photo" className={classes.userPhoto} />
                <h2>{profile.fullName}</h2>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
                <span>{profile.aboutMe}</span>
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