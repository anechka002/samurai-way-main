import React, { useState } from 'react'
import s from './MyPosts.module.css'
import Post from './post/Post';

export type PostType = {
  id: number
  img: string
  message: string
  likesCount: number
}

function MyPosts() {
  const [posts, setPosts] = useState<PostType[]>([
      {
        id: 1, 
        img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png", 
        message: 'Hi, how are you?',
        likesCount: 10
      },
      {
        id: 2, 
        img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png", 
        message: "I'm learn React",
        likesCount: 0
      },
    ]
  ) 


const handleIncrementLikesCount = (postId: number) => {
  setPosts(posts.map(p => p.id === postId ? {...p, likesCount: p.likesCount + 1} : p))
}

  return (
    <div>
      <div>My post</div>
      <div>New post</div>
      <input type="text" />
      <button>add</button>

      {posts.map((post) => (
        <Post 
        key={post.id} 
        post={post} 
        handleIncrementLikesCount={handleIncrementLikesCount}
        />
      ))}

    </div>
  )
}

export default MyPosts
