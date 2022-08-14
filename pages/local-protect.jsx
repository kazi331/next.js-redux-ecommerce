import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import Loading from '../components/Loading';
import UserInfo from '../components/UserInfo';
const LocalProtect = () => {
    const { data: session, status } = useSession();
    if (status === 'loading') return <Loading />
    if (status === 'unauthenticated') return signIn();
    return (<>
        <h2 className='text-center py-10 text-green-500 text-3xl'>This is locally protected</h2>
        <div className="flex w-full items-center justify-center">
            <UserInfo {...session} />
        </div>
    </>
    );
};

export default LocalProtect;