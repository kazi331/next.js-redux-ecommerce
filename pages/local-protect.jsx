import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import Loading from '../components/Loading';
import UserInfo from '../components/UserInfo';
import Login from './login';
const LocalProtect = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    if (status === 'loading') return <Loading />
    if (status === 'unauthenticated') {
        router.push(`/login`)
    }
    if (status === 'authenticated') {
        return (<>
            <h2 className='text-center py-10 text-green-500 text-3xl'>This is locally protected</h2>
            <div className="flex w-full items-center justify-center">
                <UserInfo {...session} />
            </div>
        </>
        )
    };
};

export default LocalProtect;