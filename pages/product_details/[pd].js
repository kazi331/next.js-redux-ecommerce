import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { chevronLeft, loadingIcon } from '../../components/icons';
import { getProducts } from '../../redux/features/productSlice';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const [fav, setFav] = useState(false)
    const route = useRouter();
    const { pd } = route.query;
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    const { products, loading } = useSelector(state => state.products);
  

    if (loading) {
        return (
            <div className="flex items-center justify-center my-10">
                <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#10B981] transition ease-in-out duration-150 cursor-not-allowed" disabled="">
                    {loadingIcon}
                    Loading...
                </div>
            </div>
        )
    }
    const product = products?.find(product => product._id === pd);
    const { title, unit, price, type, quantity, image, _id, description, flashSale } = product;
    return (
        <section className="dark:text-gray-200 dark:bg-[#292E46] body-font overflow-hidden">
             <div className="container px-5 py-24 mx-auto">
                <div className="w-full lg:w-4/5 mx-auto flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2  lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <button onClick={() => history.back()} className='flex text-sm py-1 px-2 border-[1px]  border-gray-600 mb-2 hover:text-gray-200 hover:border-gray-400 '>{chevronLeft} Back</button>
                        <h2 className="text-sm title-font dark:text-gray-400 tracking-widest">{type}</h2>
                        <h1 className="text-3xl title-font font-medium mb-4">{title}</h1>
                        <div className="flex mb-4 cursor-pointer">
                            <a className="flex-grow text-[#10B981] border-b-2 border-[#10B981] py-2 text-lg px-1">Description</a>
                            <a className="flex-grow border-b-2 dark:border-gray-700 py-2 text-lg px-1">Reviews</a>
                            <a className="flex-grow border-b-2 dark:border-gray-700 py-2 text-lg px-1">Details</a>
                        </div>
                        <p className="leading-relaxed mb-4">{description}</p>
                        <div className="flex border-t dark:border-gray-700 py-2">
                            <span className="text-gray-500">FlashSale</span>
                            <span className="ml-auto text-white">{flashSale ? 'Yes' : 'No'}</span>
                        </div>
                        <div className="flex border-t dark:border-gray-700 py-2">
                            <span className="text-gray-500">Quantity</span>
                            <span className="ml-auto text-white">{quantity}</span>
                        </div>
                        <div className="flex border-t border-b mb-6 dark:border-gray-700 py-2">
                            <span className="text-gray-500">Unit</span>
                            <span className="ml-auto text-white">{unit}</span>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-white">${price}</span>
                            <button className="flex ml-auto text-white bg-[#10B981] border-0 py-2 px-6 focus:outline-none hover:bg-[#09a16f] rounded animate-bounce">Order</button>
                            <button onClick={() => setFav(!fav)} className={`rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 ${fav ? 'bg-[#10b98123]' : 'bg-gray-800'}`}>
                                <svg fill={fav ? '#10B981' : 'currentcolor'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <Image height="500" width="500" alt="ecommerce" className="md:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded shadow shadow-red-400" src={image} />
                </div>
            </div>
        </section>
    )
}

export default ProductDetails