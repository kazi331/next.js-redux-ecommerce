import Head from 'next/head'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Blogs = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);
    return (
        <div>
            <Head>
                <title>Our Blogs</title>
            </Head>
            <h2 className='text-center text-3xl py-4'>Our Blogs</h2>
            <div className="container mx-auto py-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                {
                    posts && posts.map(
                        post => (
                            <Link href={`/post/${post.id}`} key={post.id} >
                                <div className="box-border bg-gray-400 bg-opacity-30 p-2 overflow-hidden rounded-md shadow pe-0 cursor-pointer hover:bg-opacity-50">
                                    <h2><a className='text-xl capitalize'>{post.title.slice(0, 20)}</a></h2>
                                    <p className='text-sm'>{post.body.slice(0, 80)}</p>
                                </div>
                            </Link>
                        )

                    )
                }
            </div>
        </div>
    );
};

export default Blogs;