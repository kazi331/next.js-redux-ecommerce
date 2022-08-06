import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLocalItems } from '../redux/features/cartSlice';
import CartItems from './CartItems';
import Nav from './Nav';

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const showCart = useSelector(state => state.cartItems.showCart);
    useEffect(() => {
        dispatch(setLocalItems())
    }, [dispatch])

    return (
        <div>
            <Nav />
            {children}

            {showCart && <CartItems />}
        </div>
    );
};

export default Layout;