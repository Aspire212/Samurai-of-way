import React from "react";
import Post from "./Post";

import "./MyPosts.css";

const MyPosts = ({ postData, addPost }) => {

    let newPostElement = React.createRef();

    return (
        <div className="posts-block">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={ newPostElement }></textarea>
                </div>
                <div>
                    <button
                        className="add-post"
                        onClick={ () => {
                            addPost(newPostElement.current.value)
                            newPostElement.current.value = ''
                            } }>add post</button>
                </div>
            </div>
            <div className="posts">
                {postData.map((post) => (
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
