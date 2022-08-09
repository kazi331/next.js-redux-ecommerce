import { getSession, signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { loadingIcon } from '../components/icons';
import Login from './login';

const Dashboard = () => {
    const { data: session, status } = useSession();
    if (status === 'loading') {
        return (<div>
            <div className="flex items-center justify-center">
                <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#10B981] transition ease-in-out duration-150 cursor-not-allowed" disabled="">
                    {loadingIcon}
                    Loading...
                </div>
            </div>
        </div>)
    }

    if (status === 'authenticated') {
        return (<>
            <h2 className='text-center text-xl pt-4'>Dashboard</h2>
            <div className="flex w-full items-center justify-center">
                <div className="rounded-3xl w-full py-4 overflow-hidden shadow-xl max-w-xs my-3 bg-gray-800 bg-opacity-30">
                    <div className="flex justify-center">
                        <Image src={session?.user?.image} height="200" width="200" alt={session?.user?.name} className="rounded-full border-solid border-white border-2 -mt-3" />
                    </div>
                    <div className="text-center px-3 pb-6 pt-2">
                        <h3 className="text-white text-sm bold font-sans">{session?.user?.name}</h3>
                        <p className="mt-2 font-sans font-light text-white">{session?.user?.email}</p>
                    </div>
                    <div className="flex justify-center pb-3 text-white">
                        <div className="text-center mr-3 border-r pr-3">
                            <h2>34</h2>
                            <span>Photos</span>
                        </div>
                        <div className="text-center">
                            <h2>42</h2>
                            <span>Friends</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
    if(status === 'unauthenticated'){
        return <Login />
    }
};

export default Dashboard;