import React from "react";
import Post from "./Post";

import "./MyPosts.css";

const MyPosts = ({ postData }) => {

    return (
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
            <div className="posts">
                {postData.map((post) => (
                    <Post
                        key={post.id}
                        message={post.message}
                        likes={post.likesCount}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyPosts;
