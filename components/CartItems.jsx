import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../redux/features/cartSlice";
import CartItem from "./CartItem";
const CartItems = () => {
    const { cartItems, amount, total } = useSelector(state => state.cartItems);
    const showCart = useSelector(state => state.cartItems.showCart)
    const dispatch = useDispatch();
    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex z-40">
            <div className="w-0 md:w-1/2 lg:w-4/6 bg-gray-800 bg-opacity-20" onClick={() => dispatch(closeCart())}></div>
            <div className="dark:text-gray-400 body-font max-w-lg overflow-auto px-6 w-full md:w-1/2 lg:w-2/6 z-50 bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-20 backdrop-blur-xl transition-all delay-75">
                {
                    cartItems.length < 1 ? <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white">Cart is empty</h1>
                    </div> :
                        <div className="container mx-auto">
                            <div className="flex flex-col text-center w-full mb-4 rounded py-2">
                                <div className="flex items-center justify-between px-2">
                                    <h1 className="sm:2text-xl text-xl font-medium dark:text-white">Cart Items ({amount})</h1>
                                    <button onClick={() => dispatch(closeCart())} className="float-right text-white px-2 py-1 font-bold bg-red-400"> &times;</button>
                                </div>
                            </div>
                            <div className="flex flex-wrap -m-2">
                                {cartItems && cartItems.map(item => <CartItem item={item} key={item._id} />)}
                            </div>
                        </div>
                }
                <div className="flex items-center justify-between p-2 sticky bottom-0 dark:bg-gray-800 rounded dark:text-white mt-4">
                    <span>Total</span>
                    <span>${total}</span>
                </div>
            </div>
        </div>
    );
};

export default CartItems;