import React from "react";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

import "./Profile.css";

const Profile = ({ postData }) => (
    <div className="profile">
        <ProfileInfo />
        <MyPosts postData={postData}/>
    </div>
);

export default Profile;
