import React, { useState } from 'react'
import s from './Post.module.css'
import { PostType } from '../MyPosts'

type PostPropsType = {
  post: PostType
  handleIncrementLikesCount: (postId: string) => void
}

function Post({post, handleIncrementLikesCount}: PostPropsType) {

  const onClickLikeCount = () => {
    handleIncrementLikesCount(post.id)
  }
  
  return (
    
    <div className={s.post}>
      <div className={s.item}>
        <img src={post.img} />
        {post.message}
      </div>
      <div className={s.like}>
        <span onClick={onClickLikeCount}>like: {post.likesCount} </span>
      </div>
    </div>
      
  )
}

export default Post