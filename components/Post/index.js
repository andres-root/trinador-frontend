import React from 'react';

const Post = ({ content, name, username }) => {
  return (
    <article className='post'>
      <h2>{name}</h2>
      <h3>{username}</h3>
      <p>{content}</p>
    </article>
  )
};

export default Post;