import { SessionProvider } from "next-auth/react";
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import Nav from './Nav';
const Layout = ({ children, session }) => {
    const showCart = useSelector(state => state.cartItems.showCart);

    return (
        <div className="text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-[#292E46]">
            <SessionProvider session={session} refetchInterval={5 * 60} >
                <Nav />
                {children}
                {showCart && <CartItems />}
                <Toaster position="bottom-right" />
            </SessionProvider>
        </div>
    );
};

export default Layout;