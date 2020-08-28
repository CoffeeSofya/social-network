import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.dispatch({type:'ADD-POST'});
    newPostElement.current.value = '';
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    let action = {type:'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
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