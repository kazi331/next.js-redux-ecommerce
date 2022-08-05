import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItems from '../components/CartItems';
import SingleProduct from "../components/SingleProduct";
import { getProducts } from '../redux/features/productSlice';

const Home = () => {
    const showCart = useSelector(state => state.cartItems.showCart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);
    const { products, loading } = useSelector(state => state.products);

    return (
        <div>
            <h2 className='text-center font-bold text-3xl dark:text-gray-200 '>All Products</h2>
            <section className="dark:text-gray-200 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                        {
                            products?.length < 1 ? <ProductLoading /> : products.map(product => <SingleProduct key={product._id} product={product} />)
                        }
                    </div>
                </div>
            </section>
            {showCart && <CartItems />}
        </div>

    );
};
const ProductLoading = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (<>
        {arr.map((a, i) => <div key={i} className="animate-pulse group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center">
            <div className="w-[200px] h-[250px] px-2 bg-gray-400 dark:bg-[#3b3f5e] rounded flex flex-col items-center justify-center">
                <div className="animate-pulse w-[170px] h-[170px] bg-gray-300 rounded mt-3"> </div>
                <div className="flex flex-col w-full my-2 gap-2">
                    <div className="h-2 w-12 ml-2 rounded animate-pulse bg-gray-300  dark:bg-gray-600"></div>
                    <div className="h-4 w-6/12 ml-2 rounded animate-pulse bg-gray-300  dark:bg-gray-600"></div>
                    <div className="flex justify-between items-center">
                        <div className="h-3 w-12 ml-2 rounded animate-pulse bg-gray-300  dark:bg-gray-600"></div>
                        <div className="w-6 h-6 p-4 mr-2 rounded animate-pulse bg-gray-300  dark:bg-gray-600"></div>
                    </div>
                </div>
            </div>
        </div>
        )}
    </>
    )
}
export default Home;