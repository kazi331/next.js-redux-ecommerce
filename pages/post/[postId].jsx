import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Post = () => {
    const route = useRouter();
    const dispatch = useDispatch();
    const { postId } = route.query;
    console.log(postId) 
    const post = useSelector(state => state.blogs.blogs.find(blog => blog.id == postId));
    return (
        <div className='max-w-xl mx-auto my-4'>
            <h2 className='text-xl py-2 capitalize'>{post.title}</h2>
            <p>{post.body}</p> 
            <button onClick={() => history.back()} className='w-full ring-1 ring-gray-300 px-2 py-1 m-2'> Go Back</button>
        </div>
    );
};

export default Post;