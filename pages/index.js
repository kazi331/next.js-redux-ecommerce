import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleProduct from "../components/SingleProduct";
import { getProducts } from '../redux/features/productSlice';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);
    const { products, loading } = useSelector(state => state.products);
    if (loading) {
        return (<h2>Loading.... </h2>)
    }
    return (
        <div>
            <h2 className='text-center font-bold text-3xl dark:text-gray-200 '>All Products</h2>
            <section className="dark:text-gray-200 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                        {
                             products && products.map(product => <SingleProduct key={product._id} product={product} />)
                        }
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Home;