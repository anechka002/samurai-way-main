import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import s from './MyPosts.module.css';
import { Post } from './post/Post';
import { PostType } from '../../../redux/state';

type Props = {
  posts: PostType[];
  newPostText: string
  addPost: (post: string) => void
  updateNewPostText: (newText: string) => void
  // handleIncrementLikesCount: (postId: string) => void
};

export const MyPosts = ({ posts, addPost, newPostText, updateNewPostText }: Props) => {
  // const [newPostTitle, setNewPostTitle] = useState('');
  const [error, setError] = useState<string | null>(null);

  // const addPostHandler = () => {    
  //     addPost(newPostText)
  // };

  const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // setNewPostTitle(e.currentTarget.value);
    updateNewPostText(e.currentTarget.value)
  };

  const onClickAddPostHandler = () => {
    let trimmedPostTitle = newPostText.trim()
    if(trimmedPostTitle) {
      addPost(newPostText)
    } else {
      setError('Title is required')
    }
    // setNewPostTitle('')
  }

  const onKeyDownAddPostHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    setError(null)
    if(e.key === 'Enter') {
      onClickAddPostHandler()
    }
  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div className={s.postInput}>
        <textarea
          className={error ? s.inputError : ''}
          value={newPostText}
          onChange={onPostChangeHandler}
          onKeyDown={onKeyDownAddPostHandler}
        />
        <button onClick={onClickAddPostHandler}>Add Post</button>
        {error && <div className={s.inputErrorMessage}>{error}</div>}
      </div>

      <div className={s.posts}>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            // handleIncrementLikesCount={handleIncrementLikesCount}
          />
        ))}
      </div>
    </div>
  );
};
