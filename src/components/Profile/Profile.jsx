import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <div className={s.wrap}>
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts} 
        addPost={props.addPost} 
        newPostText={props.profilePage.newPostText} 
        updateNewPostText={props.updateNewPostText} />
      </div>
    </div>
  );
};

export default Profile;
