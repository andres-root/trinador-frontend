import React, { useEffect, useState } from 'react';
import axios from 'axios';

import usePost from '../../hooks/usePost';


const PostInput = () => {
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content !== '') {
      const postData = {
        'user': 'http://localhost:8000/api/v1/user-detail/2/',
        'content': content,
      }
      const url = 'http://localhost:8000/api/v1/posts/';
      
      // Send Request to Server
      axios
      .post(url, postData, {
        headers: {
          'Authorization': 'Token 52f97b98e50d36c9194cbc6cfc27f1776f856419',
        },
      }).then((response) => {
        console.log('Response');
        console.log(response);
      });
    }
  };

  return (
    <div className='createpost'>
      <form onSubmit={handleSubmit}>
        <label>
          What's happening:
          <textarea onChange={(e) => setContent(e.target.value)} required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
};

export default PostInput;