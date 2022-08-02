import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { cartIcon, kachaBazar, notificationIcon, searchIcon, userIcon } from '../components/icons';
import styles from '../styles/Nav.module.css';
const Nav = () => {
    const { amount } = useSelector(state => state.cartItems);
    const router = useRouter();
    console.log(router.pathname)
    return (
        <div className='sticky top-0 left-0 z-40 '>
            <div className="bg-[#10B981] py-4">
                <header className='flex items-center max-w-[1280px] mx-auto  gap-10 justify-between  bg-opacity-80 backdrop-blur-xl'>
                    <Link className="nav-link" href="/" ><a><span>{kachaBazar}</span></a></Link>
                    <form className='grow mx-4 max-w-xl '>
                        <label htmlFor="search" className='flex'>
                            <input type="text" className='w-full px-4 py-2 bg-gray-100 outline-none rounded-lg text-gray-800' placeholder='Search Here' />
                            <button className='text-red -ml-10 bg-gray-100 text-gray-500 px-2'> {searchIcon} </button>
                        </label>
                    </form>

                    <div className='flex gap-2 text-white'>
                        <button className=''> {notificationIcon} </button>
                        <Link href="/cart" ><a><span className={styles.cartIcon}>{cartIcon}</span> <sup className={styles.cartAmount}>{amount}</sup></a></Link>
                        <button className=''> {userIcon} </button>
                    </div>
                </header>
            </div>
            <div className="dark:bg-[#292E46] bg-opacity-80 backdrop-blur-3xl shadow-lg dark:shadow-lg dark:shadow-gray-800">
                <nav className='flex gap-2 max-w-[1280px] mx-auto py-2 mb-4'>
                    <Link href="/" ><a className="px-2 py-1 hover:bg-gray-300 hover:dark:bg-gray-700 rounded">Home</a></Link>
                    <Link href="/products"><a className="px-2 py-1 hover:bg-gray-300 hover:dark:bg-gray-700 rounded $">Products</a></Link>
                    <Link href="/blog"><a className="px-2 py-1 hover:bg-gray-300 hover:dark:bg-gray-700 rounded ">Blogs</a></Link>
                    <Link href="/about"><a className="px-2 py-1 hover:bg-gray-300 hover:dark:bg-gray-700 rounded ">About</a></Link>
                    <Link href="/contact"><a className="px-2 py-1 hover:bg-gray-300 hover:dark:bg-gray-700 rounded ">Contact</a></Link>
                </nav>
            </div>
        </div>
    );
};

export default Nav;

