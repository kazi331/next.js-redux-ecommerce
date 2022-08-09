import { useSession } from 'next-auth/react';
import React from 'react';
import Login from '../pages/login';

const Auth = ({children}) => {
    const {data: session, status} = useSession();
    if(status === 'loading'){
        return 'loading...'
    }
    if(status === 'unauthenticated') {
        return <Login />
    }
    return children
};

export default Auth;