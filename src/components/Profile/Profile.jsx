import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <div className={s.wrap}>
        <ProfileInfo />
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
