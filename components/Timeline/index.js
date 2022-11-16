import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useFetch from '../../hooks/useFetch';

import Post from '../Post';


const URL = 'http://localhost:8000/api/v1/posts/';

const Timeline = () => {
  const [content, setContent] = useState('')
  const [posts, setPosts] = useState([]);
  let postList = '';

  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          'Authorization': 'Token 52f97b98e50d36c9194cbc6cfc27f1776f856419',
        }
      })
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  postList = posts.map((post, i) => {
    return <Post key={i} name={post.user_data.name} username={post.user_data.username} content={post.content} />
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content !== '') {
      const postData = {
        'user': 'http://localhost:8000/api/v1/user-detail/2/',
        'content': content,
      }
      
      // Send Request to Server
      axios
      .post(URL, postData, {
        headers: {
          'Authorization': 'Token 52f97b98e50d36c9194cbc6cfc27f1776f856419',
        },
      }).then((response) => {
        setPosts([{...response.data}, ...posts])
      });
    }
  };
  
  return (
    <>
      <section className='create-post'>
        <div className='createpost'>
          <form onSubmit={handleSubmit}>
            <label>
              What's happening:
              <textarea onChange={(e) => setContent(e.target.value)} required />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
      <section className='timeline'>
        {postList}
      </section>
    </>
  )
};

export default Timeline;