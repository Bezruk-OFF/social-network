import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=3bea0bc44282dc923b194c92fcc70709-7083166-images-thumbs&n=13" alt="" />
            </div>
            <div className={classes.discriptionBlock}>
                ava + discription
            </div>
        </div>
    )
}

export default ProfileInfo;