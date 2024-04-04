import React from 'react'
import s from './Post.module.css'

type PostPropsType = {
  message: string
  likeCount: number
  onClickLikeCount?: () => void
}

function Post({message, likeCount, onClickLikeCount}: PostPropsType) {
  return (
    <div className={s.item}>
      <img src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png" />
      {message}
      <div>
        <span onClick={onClickLikeCount}>like: {likeCount} </span>
      </div>
    </div>
  )
}

export default Post