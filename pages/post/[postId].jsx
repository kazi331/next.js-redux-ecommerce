import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../redux/features/blogSlice';

const Post = () => {
    const route = useRouter();
    const dispatch = useDispatch();
    const { postId } = route.query;
    useEffect(() => {
        dispatch(getPost(postId))
    }, [dispatch, postId])
    const post = useSelector(state => state.blogs.post);
    console.log(post)
    return (
        <div className='max-w-xl mx-auto my-4'>
            <h2 className='text-xl py-2 capitalize'>{post?.title}</h2>
            <p>{post?.body}</p> 
            <button onClick={() => history.back()} className='w-full ring-1 ring-gray-300 px-2 py-1 m-2'> Go Back</button>
        </div>
    );
};

export default Post;