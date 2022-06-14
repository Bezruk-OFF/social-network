import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {
    const activeLink = ({ isActive }) => isActive ? classes.active : classes.item;
    return (
        <nav className={classes.nav}>

            <div className={classes.item}>
                <NavLink to='/profile' className={activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" className={activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" className={activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" className={activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" className={activeLink}>Settings</NavLink>
            </div>
            {/* <img src={props.sideBar.avatar} alt="" /> */}

            <div className={classes.sidebar}>
                <img src='https://pbs.twimg.com/media/EQP9bQGWAAE9bbZ.jpg' alt="" />
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemptcGoTPz0dHZyiRkcPImp-y8tOX5VGLiA&usqp=CAU' alt="" />
                <img src='https://android-obzor.com/wp-content/uploads/2022/02/13-6.jpg' alt="" />
            </div>

        </nav >
    )
}

export default Navbar;