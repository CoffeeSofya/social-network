import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.wallpaper}>
        <img src="http://skinali-tomsk.ru/media/CACHE/images/catalog/3/2138/58f1e9f0c6621159d6941e592146c322.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        ava+description
      </div>
    </div>
  );
};

export default ProfileInfo;
