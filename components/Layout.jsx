import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import Nav from './Nav';

const Layout = ({ children }) => {
    const showCart = useSelector(state => state.cartItems.showCart);
    return (
        <div>
            <Nav />
            {children}
            {showCart && <CartItems />}
        </div>
    );
};

export default Layout;