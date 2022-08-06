import { useDispatch, useSelector } from 'react-redux';
import CartItems from './CartItems';
import Nav from './Nav';

const Layout = ({ children }) => {
    const dispatch = useDispatch();
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