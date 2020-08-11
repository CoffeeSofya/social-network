import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cs9.pikabu.ru/avatars/2245/x2245012-1696640051.png"></img>
      {props.message}
      <div>
  <span>like:{props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
