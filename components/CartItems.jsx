import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../redux/features/cartSlice";
import CartItem from "./CartItem";
const CartItems = () => {
    const { cartItems, amount } = useSelector(state => state.cartItems);
    const showCart = useSelector(state => state.cartItems.showCart)
    console.log(showCart)
    const dispatch = useDispatch();

    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex z-40">
            <div className="w-0 md:w-1/2 lg:w-4/6 bg-gray-800 bg-opacity-20" onClick={()=> dispatch(closeCart())}></div>
            <div className="dark:text-gray-400 body-font max-w-lg pb-10 overflow-auto px-6 w-full md:w-1/2 lg:w-2/6 z-50 bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-20 backdrop-blur-xl transition-all delay-75">
                <button onClick={() => dispatch(closeCart())} className="float-right mt-4 text-white px-2 py-1 font-bold bg-red-400"> &times;</button>
                {
                    amount < 1 ? <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white">Cart is empty</h1>
                    </div> :
                        <div className="container mx-auto">
                            <div className="flex flex-col text-center w-full">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white">Cart Items</h1>
                            </div>
                            <div className="flex flex-wrap -m-2">
                                {cartItems && cartItems.map(item => <CartItem item={item} key={item._id} />)}
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default CartItems;