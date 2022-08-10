import React from 'react';

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



export default ProductLoading;