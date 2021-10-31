import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
    const {postId} = useParams();

    const [posts, postsDetails] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(response => response.json())
        .then(data=>postsDetails(data))
    },[])
    return (
        <div>
              <h2>Post Detail: {postId}</h2>
            <h4>{posts.title}</h4>
            <p>{posts.body}</p>
            
        </div>
    );
};

export default PostDetails;