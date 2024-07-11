import React from 'react';

const PageDivider = ({products, setPerPage}) => {
    return (
        <select name="count" defaultValue="50" id="count" className='py-1 mt-4 rounded outline-none px-1 bg-gray-500' onChange={(e) => setPerPage(Number(e.target.value))}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
        <option value={products?.length}>all</option>
      </select>
    );
};

export default PageDivider;