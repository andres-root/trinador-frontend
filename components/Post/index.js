import React from 'react';

const Post = ({ content, user }) => {
  return (
    <article className='post'>
      <h2>{user.name}</h2>
      <h3>{user.username}</h3>
      <p>{content}</p>
    </article>
  )
};

export default Post;