import { useSession } from 'next-auth/react';
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import FilterBar from "../components/FilterBar";
import PageDivider from "../components/PageDivider";
import ProductLoading from "../components/ProductLoading";
import SingleProduct from "../components/SingleProduct";
import autoAnimate from '@formkit/auto-animate';

const Home = () => {
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])


  const showCart = useSelector(state => state.cartItems.showCart);
  const { searchKey, sort } = useSelector(state => state.search);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(60)
  const { products } = useSelector(state => state.products);
  const searchedProducts = products.filter(product => product.title.toLowerCase().includes(searchKey.toLowerCase()));
  // pagination content

  const numOfPage = Math.ceil(searchedProducts.length / perPage);
  let sortedProducts = searchedProducts;
  if (sort === 'high2low') {
    sortedProducts = searchedProducts.sort((a, b) => b.price - a.price)
  } else if (sort === 'low2high') {
    sortedProducts = searchedProducts.sort((a, b) => a.price - b.price)
  } else if (sort === 'default') {
    sortedProducts = searchedProducts.sort(a => a)
  }
  const paginatedProducts = sortedProducts.slice(page * perPage, (page + 1) * perPage);

  const arr = [...Array(numOfPage).keys()];

  return (
    <div className='dark:bg-[#292E46] bg-gray-200'>
      <Head>
        <title>Next Redux Ecommerce Website</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <h2 className='text-center font-bold text-3xl dark:text-gray-200 pt-10 '>All Products</h2>
      <section className="dark:text-gray-200 body-font">
        <div className="container px-5 py-10 mx-auto">
          <FilterBar />
          <div ref={parent} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3 py-4">
            {paginatedProducts.length < 1 ? <ProductLoading /> : paginatedProducts.map(product => <SingleProduct key={product._id} product={product} />)}
          </div>

          {/* pagination */}
          <div className="mt-10 mb-6 text-center">
            {searchedProducts.length > perPage && (
              arr.map(index => <button key={index} onClick={() => setPage(index)} className={`bg-gray-500 px-2 mx-1 hover:bg-[#10B981] text-white transition-all ${page == index && 'bg-[#10B982] px-4'}`}>{index + 1}</button>)
            )}
            <PageDivider products={products} setPerPage={setPerPage} />
          </div>
        </div>
      </section>
      {showCart && <CartItems />}
    </div>
  );
};



export default Home;
