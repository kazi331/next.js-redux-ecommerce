import autoAnimate from '@formkit/auto-animate';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '../redux/features/blogSlice';
const Blogs = ({ session }) => {
    const dispatch = useDispatch();
    const parent = useRef(null);
    useEffect(() => {
        dispatch(getBlog())
        parent.current && autoAnimate(parent.current)
    }, [dispatch])
    const { blogs } = useSelector(state => state.blogs);
 
    return (
        <div className='text-gray-800 bg-gray-50 dark:text-gray-100 dark:bg-[#292E46]'>
            <Head>
                <title>Our Blogs</title>
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <h2 className='text-center text-3xl py-4 text-green-400 '>Our Blogs</h2>
            <div ref={parent} className="container mx-auto py-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                {
                    blogs && blogs.map(
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

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!session) {
        return {
            props: {
                session: { message: 'UnAuthorized', rule: 'visitor' }
            }
        }
    }

    return {
        props: { session }
    }
}

export default Blogs;