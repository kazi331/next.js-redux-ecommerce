import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import AddToCart from './cart-components/AddToCart';
import IncreaseDecrease from './cart-components/IncreaseDecrease';



const SingleProduct = ({ product }) => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cartItems);
    const { image, type, price, title, _id, itemCount } = product;
    const existOnCart = cartItems.find(item => item._id === _id);
    return (
        <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center">
            <div className="p-3 bg-gray-100 dark:bg-[#2F334D] rounded-lg hover:shadow-lg">
                <a className="block  h-48 rounded overflow-hidden product-image">
                    {/* <Image className="" width={200} height={200} src={image} quality="40" placeholder="blur" blurDataURL={image}  alt={title} /> */}
                    <Image className="" width={200} height={200} src={image} quality="40"   alt={title} />
                </a>
                <div className="mt-4">
                    <h3 className=" text-xs tracking-widest title-font mb-1">{type}</h3>
                    <h2 className=" title-font text-lg font-medium">{title.slice(0, 50)}</h2>
                    <div className="flex items-center justify-between">
                        <p className="mt-1">${price}</p>
                        {
                            cartItems.find(item => item._id === _id) ? <IncreaseDecrease itemCount={existOnCart?.itemCount} _id={_id} /> : <AddToCart product={product} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SingleProduct;