import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostAC, updateNewPostTextAC} from "../../../redux/reducers/profileReducer";
import {connect} from "react-redux";

const MyPosts = (props) => {
    const postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    const addPost = () => {
        props.addPost()
    }

    const handlerChange = (event) => {
        props.updateNewPostText(event.target.value);
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div className={s.entry}>
                <h3>Enter your message</h3>
                <div className={s.entryField}>
                    <textarea onChange={handlerChange}
                              value={props.newPostText}
                    />
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

const mapDispatchToProps = dispatch => ({
    addPost: () => {
        dispatch(addPostAC());
    },
    updateNewPostText: (newPostText) => {
        dispatch(updateNewPostTextAC(newPostText))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);