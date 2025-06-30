import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import s from './MyPosts.module.css'
import { v1 } from 'uuid'
import { Post } from './post/Post'

export type PostType = {
  id: string
  img: string
  message: string
  likesCount: number
}

export const MyPosts = () => {
  const [posts, setPosts] = useState<PostType[]>([
      {
        id: v1(), 
        img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png", 
        message: 'Hi, how are you?',
        likesCount: 10
      },
      {
        id: v1(), 
        img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png", 
        message: "I'm learn React",
        likesCount: 5
      },
    ]
  ) 

  const [newPostTitle, setNewPostTitle] = useState('');
  const [error, setError] = useState<string | null>(null)


const handleIncrementLikesCount = (postId: string) => {
  setPosts(posts.map(p => p.id === postId ? {...p, likesCount: p.likesCount + 1} : p))
}

const addPost = (message: string) => {
  let newPost: PostType = {
    id: v1(),
    img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png", 
    message: message,
    likesCount: 0
  }
  setPosts([newPost, ...posts])
}

const onClickAddPostHandler = () => {
  let trimmedPostTitle = newPostTitle.trim()
  if(trimmedPostTitle) {
    addPost(newPostTitle)
  } else {
    setError('Title is required')
  }
  setNewPostTitle('')
}

const onChangeSetPostHandler = (e:ChangeEvent<HTMLInputElement>) => {
  setNewPostTitle(e.currentTarget.value)
  // console.log(e.currentTarget.value)
}

const onKeyDownAddPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
  setError(null)
  if(e.key === 'Enter') {
    onClickAddPostHandler()
  }
}

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>      
        <input 
          className={error ? s.inputError : ''}
          value={newPostTitle} 
          onChange={onChangeSetPostHandler} 
          onKeyDown={onKeyDownAddPostHandler} 
        />
        <button onClick={onClickAddPostHandler}>add</button>
        {error && <div className={s.inputErrorMessage}>{error}</div>}
      </div>

      <div className={s.posts}>
        {posts.map((post) => (
          <Post 
            key={post.id} 
            post={post} 
            handleIncrementLikesCount={handleIncrementLikesCount}
          />
        ))}
      </div>
    </div>
  )
}

