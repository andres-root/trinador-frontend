import React from 'react';
import useFetch from '../../hooks/useFetch';

import Post from '../Post';


const Timeline = () => {
  let postList = '';
  const {data, loading, error} = useFetch('http://localhost:8000/api/v1/posts/');
  if (data) {
    postList = data.map((post, i) => {
     return <Post key={i} content={post.content} user={post.user} />
    });
  }
  

  return (
    <section className='timeline'>
      {postList}
    </section>
  )
};

export default Timeline;