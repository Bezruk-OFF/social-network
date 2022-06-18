import { react } from "react";
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

let Users = (props) => {

    let getUsers = () => {

        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    // debugger;
                    props.setUsers(response.data.items);
                });
        }
    }

    return < div className={classes.users} >
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.toggleFollow(u.id) }}>Follow</button>
                            : <button onClick={() => { props.toggleFollow(u.id) }}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div >)
        }
    </div >
}

export default Users;
