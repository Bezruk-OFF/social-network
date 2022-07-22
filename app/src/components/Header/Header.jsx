import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = ({ isAuth, login, logout }) => {
    return (
        <header className={classes.header}>
            <img src="https://w7.pngwing.com/pngs/128/77/png-transparent-brand-brown-beige-instagram-brown-text-rectangle.png" alt="" />

            <div className={classes.loginBlock}>
                {isAuth
                    ? <div>{login} - <button onClick={logout}>Log out</button></div>
                    : < NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header >
    )
}

export default Header;