import React from "react";
import Post from "./Post";

import "./MyPosts.css";

const MyPosts = () => {
    const postData = [
        {
            id: 1,
            message: "It's my first post!",
            likesCount: 11,
        },
        {
            id: 2,
            message: "Hi, how are you?",
            likesCount: 12,
        },
    ];

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
