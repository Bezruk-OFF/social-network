import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength = maxLengthCreator(100);

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post avatar={p.avatar} message={p.message} likesCount={p.likesCount} key={p.id} />);

    let AddPostForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name={'newPostText'} placeholder={'Post message'}
                        validate={[required, maxLength]} />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        )
    }

    let AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(AddPostForm);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost} />
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div >
    );
}

export default MyPosts;