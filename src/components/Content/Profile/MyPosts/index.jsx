import React from 'react'
import Post from './Post'

import './MyPosts.css'

const MyPosts = () => (

  <div>
    My posts
    <div>
      <textarea></textarea>
      <button>add post</button>
    </div>
    <div>
      <Post message="It's my first post!" />
      <Post message='Hi, how are you?'/>
    </div>
  </div>  
)


export default MyPosts