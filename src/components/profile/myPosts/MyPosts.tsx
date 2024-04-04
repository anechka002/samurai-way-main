import React from 'react'
import s from './MyPosts.module.css'
import Post from './post/Post'

function MyPosts() {
  return (
    <div>
      <div>My post</div>
      <div>New post</div>
      <Post/>
      <Post/>
    </div>
  )
}

export default MyPosts