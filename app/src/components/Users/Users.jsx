import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({ currentPage, onPageChenged, totalUsersCount, pageSize, ...props }) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChenged={onPageChenged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {
                props.users.map(u => <User user={u}
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />)
            }
        </div>
    </div>
}

export default Users;
