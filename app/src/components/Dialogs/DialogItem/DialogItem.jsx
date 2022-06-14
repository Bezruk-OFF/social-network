import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';


const activeLink = ({ isActive }) => isActive ? classes.active : classes.item;

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${props.id}`} className={activeLink}>
                <div>
                    <img src="https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg" alt="" />
                </div>
                <span>{props.name}</span>
            </NavLink>
        </div>
    );
}

export default DialogItem;