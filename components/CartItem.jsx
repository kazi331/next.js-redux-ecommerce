import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { chevronDown, chevronUp } from '../components/icons';
import { decreaseItem, increaseItem, removeItem } from '../redux/features/cartSlice';

const CartItem = ({ item }) => {
    const { category, title, _id, image, price, imtemCount } = item;
    const dispatch = useDispatch();
    return (
        <div className="p-2  w-full">
            <div className="h-full flex items-center justify-between bg-gray-200 bg-opacity-10 p-4 rounded-lg text-gray-200">
                <div className="flex">
                    {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={image} /> */}
                    <Image className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" width={100} height={100} src={image} alt={title} />
                    <div className="flex items-center">
                        <div className="flex-grow ">
                            <h2 className=" title-font font-medium">{title.slice(0, 80)}</h2>
                            <p>${price}</p>
                            <button onClick={() => dispatch(removeItem(_id))} className='bg-[#10B981] px-1'>Remove</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <button onClick={() => dispatch(increaseItem(_id))} className='bg-[#10B981]'>{chevronUp}</button>
                    <span>{imtemCount}</span>
                    <button onClick={() => imtemCount > 1 ? dispatch(decreaseItem(_id)) : dispatch(removeItem(_id)) } className='bg-[#10B981]'>{chevronDown}</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;