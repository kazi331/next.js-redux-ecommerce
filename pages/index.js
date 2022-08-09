import Head from "next/head";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import FilterBar from "../components/FilterBar";
import SingleProduct from "../components/SingleProduct";
import { useSession } from 'next-auth/react'

const Home = () => {
  const { data, status } = useSession();
  const showCart = useSelector(state => state.cartItems.showCart);
  const { searchKey, category } = useSelector(state => state.search);
  const { products, loading } = useSelector(state => state.products);
  const searchedProducts = products.filter(product => product.title.toLowerCase().includes(searchKey.toLowerCase()));
  // pagination content
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(60)

  const numOfPage = Math.ceil(searchedProducts.length / perPage);
  let paginatedProducts = searchedProducts.slice(page * perPage, (page + 1) * perPage);
  const arr = [...Array(numOfPage).keys()];

  return (
    <>
      <Head>
        <title>Next Redux Ecommerce Website</title>
      </Head>
      <h2 className='text-center font-bold text-3xl dark:text-gray-200 mt-10 '>All Products</h2>
      <section className="dark:text-gray-200 body-font">
        <div className="container px-5 py-10 mx-auto">
          <FilterBar />
          <div className="px-2"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
            {paginatedProducts.length < 1 ? <ProductLoading /> : paginatedProducts.map(product => <SingleProduct key={product._id} product={product} />)}
          </div>

          {/* pagination */}

          <div className="mt-10 mb-6 text-center">
            {searchedProducts.length > perPage && (
              arr.map(index => <button key={index} onClick={() => setPage(index)} className={`bg-gray-500 px-2 mx-1 hover:bg-[#10B981] text-white transition-all ${page == index && 'bg-[#10B982] px-4'}`}>{index + 1}</button>)
            )}

            <select name="count" id="count" className='py-1 mt-4 rounded outline-none px-1 bg-gray-500' onChange={(e) => setPerPage(Number(e.target.value))}>
              <option value="50" >50</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="75">75</option>
              <option value="100">100</option>
              <option value={products.length}>all</option>
            </select>
          </div>
        </div>
      </section>
      {showCart && <CartItems />}
    </>
  );
};

/* Product loading animation skeleton */
const ProductLoading = () => {
  const arr = [...Array(20).keys()].map((key) => key + 1);
  return (
    <>
      {arr.map((a, i) => (
        <div
          key={i}
          className="animate-pulse group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center"
        >
          <div className="w-[250px] h-[300px] p-4 bg-gray-400 dark:bg-[#3b3f5e] rounded flex flex-col items-center justify-center">
            <div className="animate-pulse w-full h-full bg-gray-300 rounded px-3">
            </div>
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
      ))}
    </>
  );
};
export default Home;
