import React from 'react'
import s from './Post.module.css'

function Post() {
  return (
    <div className={s.item}>
      <img src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png" alt="" />
      post1
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post