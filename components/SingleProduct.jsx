import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import AddToCart from './cart-components/AddToCart';
import IncreaseDecrease from './cart-components/IncreaseDecrease';



const SingleProduct = ({ product }) => {
    const { cartItems } = useSelector(state => state.cartItems);
    const { image, type, price, title, _id } = product;

    return (
        <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center">
            <div className="p-3 bg-gray-100 dark:bg-[#2F334D] rounded-lg hover:shadow-lg">
                <Link href={`/product_details/${_id}`}>
                    <a className="block  h-48 rounded overflow-hidden product-image">
                        <Image className="" width={200} height={200} src={image} quality="40" alt={title} />
                    </a>
                </Link>
                <div className="mt-4">
                    
                    <h3 className=" text-xs tracking-widest title-font mb-1">{type}</h3>
                    <h2 className="title-font text-lg font-medium hover:text-[#10B981]"> <Link href={`/product_details/${_id}`} >{title.slice(0, 50)}</Link> </h2>
                    <div className="flex items-center justify-between">
                        <p className="mt-1">${price}</p>
                        {
                            cartItems.find(item => item._id === _id) ? <IncreaseDecrease product={product} _id={_id} /> : <AddToCart product={product} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SingleProduct;