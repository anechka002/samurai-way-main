import React, { useState } from 'react'
import s from './MyPosts.module.css'
import Post from './post/Post';

function MyPosts() {
  const [likeCount, setLikeCount] = useState(0)
  console.log('likeCount: ', likeCount)

  const onClickLikeCount = (likeCount: number) => {
    setLikeCount(likeCount + 1)
  }

  return (
    <div>
      <div>My post</div>
      <div>New post</div>
      <Post onClickLikeCount={()=>onClickLikeCount(likeCount)} message='Hi, how are you?' likeCount={likeCount} />
      {/* <Post message="I'm learn React" likeCount='15'/> */}
    </div>
  )
}

export default MyPosts