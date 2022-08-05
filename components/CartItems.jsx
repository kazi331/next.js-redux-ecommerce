import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
const CartItems = () => {
    const { cartItems, amount } = useSelector(state => state.cartItems)
    if (amount < 1) {
        return (
            <div>
                <h2 className="text-center p-4 text-2xl font-medium">Your cart is empty 🙃</h2>
            </div>
        )
    }
    return (
        <div>
            <section className="text-gray-400  body-font max-w-xl mx-auto mb-10">
                <div className="container mx-auto">
                    <div className="flex flex-col text-center w-full p-10">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Cart Items</h1>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {cartItems && cartItems.map(item => <CartItem item={item} key={item._id} />)}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CartItems;