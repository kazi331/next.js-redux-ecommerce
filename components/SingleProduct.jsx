import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/features/cartSlice';
import { addToCart } from './icons';


const SingleProduct = ({product}) => {
    const dispatch = useDispatch();
    const {image,type, price, title} = product;
    return (
        <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center">
            <div className="p-3 bg-gray-100 dark:bg-[#2F334D] rounded-lg hover:shadow-lg">
                <a className="block  h-48 rounded overflow-hidden product-image">
                    {/* <img alt="ecommerce" className="object-cover object-center w-full h-full block" width="200" src={image} /> */}
                    <Image className="" width={500} height={500} src={image} alt={title} />
                </a>
                <div className="mt-4">
                    <h3 className=" text-xs tracking-widest title-font mb-1">{type}</h3>
                    <h2 className=" title-font text-lg font-medium">{title.slice(0,50)}</h2>
                    <div className="flex items-center justify-between">
                    <p className="mt-1">${price}</p>
                    <button onClick={() => dispatch(addItem({...product, itemAmount:1}))} className='px-2 py-2 border-1  border-[#d3d3d3] dark:border-[#505050] hover:border-transparent hover:bg-[#10B981] hover:text-white addToCart'> {addToCart} </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;