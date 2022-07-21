import React from "react";
import classes from './Paginator.module.css';

let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        if (i == 25) {
            break;
        }
    }

    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p && classes.selectedPage}  // Warning: Received `false` for a non-boolean attribute `className`.
                onClick={() => { props.onPageChenged(p) }}>{p}</span>
        })}
    </div>
}

export default Paginator;
