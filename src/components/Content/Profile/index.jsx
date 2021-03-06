import React from "react";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

import "./Profile.css";

const Profile = ({ postData, addPost, updateNewPostText }) => (
    <div className="profile">
        <ProfileInfo />
        <MyPosts
            postData={postData}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />
    </div>
);

export default Profile;
