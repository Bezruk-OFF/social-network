import Post from './Post/Post';
import classes from './MyPosts.module.css';
import React from 'react';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post avatar={p.avatar} message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost} >добавить пост</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div >
    );
}
export default MyPosts;