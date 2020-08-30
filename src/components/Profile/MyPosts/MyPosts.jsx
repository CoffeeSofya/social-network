import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from './../../../redux/profileReducer';

const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(onPostChangeActionCreator(text));
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
      <textarea ref={newPostElement} onChange={ onPostChange } value={props.newPostText}/>
      </div>
      <button onClick={ addPost }>Add post</button>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;