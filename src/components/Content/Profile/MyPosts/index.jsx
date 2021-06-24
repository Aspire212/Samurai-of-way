import React from "react";
import Post from "./Post";

import "./MyPosts.css";

const MyPosts = ({ postData }) => {

    let newPostElement = React.createRef();

    let addPosts = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

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
                        onClick={ addPosts }>add post</button>
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
