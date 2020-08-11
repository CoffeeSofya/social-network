import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.wallpaper}>
        <img src="http://skinali-tomsk.ru/media/CACHE/images/catalog/9/738/e06e6890fe5d358e65d713375180a366.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        ava+description
      </div>
    </div>
  );
};

export default ProfileInfo;
