import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://w7.pngwing.com/pngs/128/77/png-transparent-brand-brown-beige-instagram-brown-text-rectangle.png" alt="" />

            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : < NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header >
    )
}

export default Header;