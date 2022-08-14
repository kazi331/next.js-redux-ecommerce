import React from 'react';
import { loadingIcon } from './icons';

const Loading = () => {
    return (
        <div className="py-4 my-4 flex items-center justify-center">
            <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#10B981] transition ease-in-out duration-150 cursor-not-allowed">
                {loadingIcon}
                Loading...
            </div>
        </div>
    );
};

export default Loading;