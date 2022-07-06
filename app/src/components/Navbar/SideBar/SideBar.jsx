import classes from './SideBar.module.css';

const SideBar = (props) => {
    return (
        <div className={classes.item}>

            {/* <img src={props.avatar} alt="" /> */}

            {/* <img src='https://pbs.twimg.com/media/EQP9bQGWAAE9bbZ.jpg' alt="" /> */}
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemptcGoTPz0dHZyiRkcPImp-y8tOX5VGLiA&usqp=CAU' alt="" />
            <img src='https://android-obzor.com/wp-content/uploads/2022/02/13-6.jpg' alt="" />

        </div>
    );
}

export default SideBar