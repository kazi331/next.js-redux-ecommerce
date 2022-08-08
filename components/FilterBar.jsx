import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../redux/features/searchFilter';

const FilterBar = () => {
    const [range, setRange] = useState(0);
    const dispatch = useDispatch();

    return (
        <div className='m-2 flex items-center justify-around gap-4'>
            <select onChange={(e) => dispatch(filter(e.target.value))} name="category" id="category" className='outline-none rounded p-2 bg-gray-500 grow'>
                <option value="Grocery">Grocery</option>
                <option value="Vegitable">Vegitable</option>
                <option value="Drinks">Drinks</option>
                <option value="Health Care">Heal Care</option>
                <option value="">All</option>
            </select>
            <select name="category" id="category" className='outline-none rounded p-2 bg-gray-500 grow'>
                <option value="disabled" disabled>Sort By</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="quantity">Quantity</option>
            </select>
            <div className="pt-1 flex items-center justify-between gap-4 grow">
                <label htmlFor="custom-range" className='whitespace-nowrap'>Price Range</label>
                <input type="range"
                    className=" w-full max-w-xl h-6 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none " title={range} onChange={(e) => setRange(e.target.value)} id="custom-range" />
            </div>
        </div>
    );
};

export default FilterBar;