import Head from "next/head";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import FilterBar from "../components/FilterBar";
import SingleProduct from "../components/SingleProduct";
import { useSession } from 'next-auth/react'
import ProductLoading from "../components/ProductLoading";

const Home = () => {
  const { data, status } = useSession();
  const showCart = useSelector(state => state.cartItems.showCart);
  const { searchKey, category, sort } = useSelector(state => state.search);
  const { products, loading } = useSelector(state => state.products);
  const searchedProducts = products.filter(product => product.title.toLowerCase().includes(searchKey.toLowerCase()));
  // pagination content
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(60)

  const numOfPage = Math.ceil(searchedProducts.length / perPage);
  let sortedProducts = searchedProducts;
  if (sort === 'high2low') {
    sortedProducts = searchedProducts.sort((a, b) => b.price - a.price)
  } else if (sort === 'low2high') {
    sortedProducts = searchedProducts.sort((a, b) => a.price - b.price)
  } else if (sort === 'default') {
    sortedProducts = searchedProducts.sort(a => a.updatedAt)
  }
  const paginatedProducts = sortedProducts.slice(page * perPage, (page + 1) * perPage);


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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3 py-4">
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



export default Home;
