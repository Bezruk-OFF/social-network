import React from "react";
import classes from './Paginator.module.css';

let Paginator = (props) => {

    let size = 7;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        // if (i == 25) {
        //     break;
        // }
    }

    let currentPages = pages;
    let f = () => {
        if (currentPages[currentPages.length - 1] != pages[pages.length - 1]) {
            currentPages = pages.slice(currentPages.length);
        }

        currentPages.slice(size, 2 * size).map(p => {
            return <span className={props.currentPage === p && classes.selectedPage}
                onClick={() => { props.onPageChenged(p) }}>{p}</span>
        })
    }
    currentPages = currentPages.slice(size);


    return <div>
        <button className={classes.prev} type="submit" >PREV</button>
        {pages.slice(0, size).map(p => {
            return <span className={props.currentPage === p && classes.selectedPage}  // Warning: Received `false` for a non-boolean attribute `className`.
                onClick={() => { props.onPageChenged(p) }}>{p}</span>
        })}
        <button className={classes.next} onclick={f}>NEXT</button>
    </div>
}

export default Paginator;
