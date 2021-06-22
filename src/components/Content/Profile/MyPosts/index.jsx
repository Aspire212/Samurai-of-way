import React from "react";
import Post from "./Post";

import "./MyPosts.css";

const MyPosts = () => (
    <div className="posts-block">
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button className="add-post">add post</button>
            </div>
        </div>
        <div className='posts'>
            <Post message="It's my first post!" />
            <Post message="Hi, how are you?" />
        </div>
    </div>
);

export default MyPosts;
