import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter, sort } from '../redux/features/searchFilter';

const FilterBar = () => {
    const { products } = useSelector(state => state.products)
    // const productPrice = products.forEach((a, b) => a.price > b.price)
    // console.log(productPrice)
    const [range, setRange] = useState(0)
    const dispatch = useDispatch();
    return (
        <div className=' m-2 flex items-center justify-around gap-4'>
            <select defaultValue="Select Category" onChange={(e) => dispatch(filter(e.target.value))} name="category" id="category" className='outline-none rounded bg-gray-50 dark:bg-gray-700 p-2  grow'>
                <option >Select Category</option>
                <option value="Grocery">Grocery</option>
                <option value="Vegitable">Vegitable</option>
                <option value="Drinks">Drinks</option>
                <option value="Health Care">Heal Care</option>
                <option value="">All</option>
            </select>
            <select defaultValue="Sort By" onChange={e => dispatch(sort(e.target.value))} name="category" id="category" className='outline-none rounded bg-gray-50 dark:bg-gray-700 p-2  grow' placeholder='Sort here'>
                <option disabled >Sort By</option>
                <option value="default">Default</option>
                <option value="low2high">Low to high</option>
                <option value="high2low">Hight to low</option>
            </select>
            <div className="pt-1 flex items-center justify-between gap-4 grow">
                <label htmlFor="custom-range" className='whitespace-nowrap'>Price Range</label>
                <input type="range"
                    min={20} max={200} className=" w-full max-w-xl h-6 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none " title={range} onChange={(e) => setRange(e.target.value)} id="custom-range" />
            </div>
        </div>
    );
};

export default FilterBar;