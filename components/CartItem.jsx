import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { minusIcon, plusIcon, trashIcon } from '../components/icons';
import { decreaseItem, increaseItem, removeItem } from '../redux/features/cartSlice';

const CartItem = ({ item }) => {
    const { category, title, _id, image, price, itemCount, itemTotal } = item;
    const dispatch = useDispatch();
    return (
        <div className="p-2  w-full ">
            <div className="h-full flex shadow items-center justify-between bg-gray-300 dark:bg-gray-800 dark:bg-opacity-20 bg-opacity-40 p-4 rounded-lg dark:text-gray-200">
                <div className="flex gap-4 w-full">
                    <Image className="w-14 h-14 object-contain rounded-full" width={100} height={100} src={image} alt={title} />
                    <div className="flex flex-col justify-center grow w-full">
                        <h2 className="title-font font-medium">{title}</h2>
                        <p className='font-light'>${price} <small>per item</small></p>
                        <div className="flex items-center justify-between ">
                            <p className='font-bold'>${itemTotal}</p>
                            <div className="flex gap-2">
                                <button onClick={() => itemCount > 1 ? dispatch(decreaseItem(_id)) : dispatch(removeItem(_id))} className='bg-[#10B981] text-white'>{minusIcon}</button>
                                <span>{itemCount}</span>
                                <button onClick={() => dispatch(increaseItem(_id))} className='bg-[#10B981] text-white'>{plusIcon}</button>
                            </div>
                            <button onClick={() => dispatch(removeItem(_id))} className='px-1 text-red-400'>{trashIcon}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;