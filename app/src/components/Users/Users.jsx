import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";
import * as axios from 'axios';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        if (i == 25) {
            break;
        }
    }

    return <div className={classes.users} >
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage}  // Warning: Received `false` for a non-boolean attribute `className`.
                    onClick={() => { props.onPageChenged(p) }}> {p}</span>
            })}
        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={classes.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                //     withCredentials: true,
                                //     headers: {
                                //         'API-KEY': 'f871d57d-aa8c-47d8-a614-db5fd0b6f312'
                                //     }
                                // })

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'f871d57d-aa8c-47d8-a614-db5fd0b6f312'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.toggleFollow(u.id);
                                        }
                                    });



                            }}>Follow</button>

                            : <button onClick={() => {

                                // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                //     withCredentials: true,
                                //     headers: {
                                //         'API-KEY': 'f871d57d-aa8c-47d8-a614-db5fd0b6f312'
                                //     }
                                // })

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'f871d57d-aa8c-47d8-a614-db5fd0b6f312'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.toggleFollow(u.id);
                                        }
                                    });

                            }}>Unfollow</button>}
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
