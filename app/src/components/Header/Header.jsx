import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://w7.pngwing.com/pngs/128/77/png-transparent-brand-brown-beige-instagram-brown-text-rectangle.png" alt="" />

            <div className={classes.loginBlock}>
                {props.isAuth ? props.login
                    : < NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header >
    )
}

export default Header;