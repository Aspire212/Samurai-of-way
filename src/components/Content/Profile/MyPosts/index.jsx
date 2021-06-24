import React from "react";
import Post from "./Post";

import "./MyPosts.css";

const MyPosts = ({ postData, addPost, updateNewPostText }) => {

    return (
        <div className="posts-block">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={postData.newPostText}
                        onChange={(e) => updateNewPostText(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        className="add-post"
                        onClick={ addPost }>
                        add post
                    </button>
                </div>
            </div>
            <div className="posts">
                {postData.posts.map((post) => (
                    <Post
                        key={post.id + Math.random()}
                        message={post.message}
                        likes={post.likesCount}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyPosts;
