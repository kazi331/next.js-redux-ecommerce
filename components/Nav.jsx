import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { cartIcon, kachaBazar, notificationIcon, searchIcon, userIcon } from "../components/icons";
import { openCart } from "../redux/features/cartSlice";
import { search } from "../redux/features/searchFilter";
import styles from "../styles/Nav.module.css";
const Nav = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { cartItems } = useSelector((state) => state.cartItems);
    const totalItems = cartItems.reduce((prev, item) => prev + item.quantity, 0);
    const { data: session, status } = useSession();
    const [mode, setMode] = useState('Light')

    const navs = [
        { id: 1, slug: "/", title: "Home" },
        { id: 2, slug: "/products", title: "Products" },
        { id: 3, slug: "/blogs", title: "Blogs" },
        { id: 4, slug: "/about", title: "About" },
        { id: 5, slug: "/protected", title: "Server" },
        { id: 6, slug: "/local-protect", title: "Local" },
        { id: 7, slug: "/dashboard", title: "Dashboard" },
    ];
    useEffect(() => {
        const darkOs = window.matchMedia('(prefers-color-scheme:dark)').matches;
        if (darkOs) {
            setMode('Dark')
            document.documentElement.classList.add("dark")
        }
    }, [])

    const switchTheme = () => {
        if (mode == 'Dark') {
            setMode('Light')
            document.documentElement.classList.remove("dark")
        } else {
            setMode('Dark')
            document.documentElement.classList.add("dark")
        }
        console.log({ mode })
    }

    return (
        <div className="sticky top-0 left-0 z-40">
            <div className="bg-[#10B981] bg-opacity-90 backdrop-blur py-4">
                <header className="flex items-center container mx-auto gap-1 md:gap-10 justify-between  px-4">
                    <Link className="nav-link" href="/">
                        <a>
                            <span>{kachaBazar}</span>
                        </a>
                    </Link>

                    {/* search form  */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            dispatch(search(e.target.search.value));
                        }}
                        className="grow mx-4 max-w-xl"
                    >
                        <label htmlFor="search" className="flex">
                            <input
                                onChange={(e) => dispatch(search(e.target.value))}
                                name="search"
                                type="text"
                                className="w-full px-4 py-2 bg-gray-100 outline-none rounded-lg text-gray-800"
                                placeholder="Search Here"
                            />
                            <button
                                type="submit"
                                className="text-red -ml-10 bg-gray-100 text-gray-500 px-2"
                            >
                                {searchIcon}
                            </button>
                        </label>
                    </form>

                    {/* right side items user/cart/notification */}
                    <div className="flex gap-2 text-white">
                        <button className=""> {notificationIcon} </button>
                        <button onClick={() => dispatch(openCart())}>
                            <span className="relative">{cartIcon}</span>
                            <sup className={styles.cartAmount}>{totalItems}</sup>
                        </button>
                        <button onClick={() => router.push('/dashboard')} className="flex">
                            {session?.user?.image ? <Image src={session?.user?.image} width="30px" height="30px" alt="user" className="rounded-full" /> : userIcon}
                        </button>
                    </div>
                </header>
            </div>

            {/* Navigation menu */}
            <div className="dark:bg-[#292E46] dark:text-gray-200 bg-opacity-80 dark:bg-opacity-90 backdrop-blur-2xl shadow-lg dark:shadow-lg dark:shadow-gray-800 flex justify-center items-center">
                <nav className={`flex overflow-x-scroll sm:overflow-hidden whitespace-nowrap gap-1 container mx-auto py-2 px-4 ${status === 'loading' ? 'opacity-0 transition-all' : 'duration-200'}`}>
                    {navs.map((nav) => (
                        <Link key={nav.id} href={nav.slug}>
                            <a
                                className={`px-2 py-1 hover:bg-gray-300 hover:dark:bg-gray-700 rounded ${router.pathname === nav.slug &&
                                    "bg-[#10B981] bg-opacity-20 dark:bg-gray-700"
                                    }`}> {nav.title}
                            </a>
                        </Link>
                    ))}
                    {status === 'unauthenticated' && <Link href="/login">
                        <a className="px-2 py-1 hover:bg-gray-300 hover:dark:bg-gray-700 rounded" > Sign In</a>
                    </Link>}
                    {status === "authenticated" && <span onClick={() => signOut('See Again')}
                        className="cursor-pointer px-2 py-1 hover:bg-gray-300 hover:dark:bg-gray-700 rounded">
                        Sign Out
                    </span>}
                </nav>
                <button className="px-2 py-1 ring-1 mr-2" onClick={switchTheme}>{mode}</button>
            </div>
        </div>
    );
};

export default Nav;
