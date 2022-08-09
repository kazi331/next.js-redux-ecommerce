import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Post = () => {
    const route = useRouter();
    const { postId } = route.query;
    const [post, setPost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json()).then(data => setPost(data))
    },[postId]);
    return (
        <div className='max-w-xl mx-auto my-4'>
            <h2 className='text-xl py-2 capitalize'>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => history.back()} className='w-full ring-1 ring-gray-300 px-2 py-1 m-2'> Go Back</button>
        </div>
    );
};

export default Post;