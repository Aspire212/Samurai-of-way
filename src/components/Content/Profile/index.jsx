import React from "react";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

import "./Profile.css";

const Profile = () => (
    <div className="profile">
        <ProfileInfo />
        <MyPosts />
    </div>
);

export default Profile;
