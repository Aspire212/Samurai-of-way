import React from "react";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

import "./Profile.css";

const Profile = ({ postData, addPost }) => (
    <div className="profile">
        <ProfileInfo />
        <MyPosts
            postData={postData}
            addPost={addPost}/>
    </div>
);

export default Profile;
