import { react } from "react";
import classes from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://games-of-thrones.ru/sites/default/files/pictures/all/Ivan/22.jpg',
                    followed: false,
                    fullName: 'Ivan',
                    status: 'I am aboss',
                    location: { city: 'Novosibirsk', country: 'Russia' }
                },
                {
                    id: 2,
                    photoUrl: 'https://games-of-thrones.ru/sites/default/files/pictures/all/Ivan/22.jpg',
                    followed: true,
                    fullName: 'Dima',
                    status: 'I am aboss',
                    location: { city: 'Minsk', country: 'Belarus' }
                },
                {
                    id: 3,
                    photoUrl: 'https://games-of-thrones.ru/sites/default/files/pictures/all/Ivan/22.jpg',
                    followed: false,
                    fullName: 'Alina',
                    status: 'I am aboss',
                    location: { city: 'Novosibirsk', country: 'Russia' }
                },
                {
                    id: 4,
                    photoUrl: 'https://games-of-thrones.ru/sites/default/files/pictures/all/Ivan/22.jpg',
                    followed: false,
                    fullName: 'Maksim',
                    status: 'I am aboss',
                    location: { city: 'Novosibirsk', country: 'Russia' }
                }
            ]
        )
    }


    return < div className={classes.users} >
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="" />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.toggleFollow(u.id) }}>Follow</button>
                            : <button onClick={() => { props.toggleFollow(u.id) }}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div >)
        }
    </div >
}

export default Users;
