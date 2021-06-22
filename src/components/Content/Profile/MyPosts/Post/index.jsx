import React from "react";

import "./Post.css";

const Post = ({ message, likes }) => (
    <div className="post">
        <img
            src="https://www.toycompany.com/components/com_virtuemart/shop_image/product/full/ava42185_540x54058ac8bb40a2db.jpg"
            alt="ava"
        />
        {message}
        <div>
            <span>like {likes}</span>
        </div>
    </div>
);

export default Post;
