import { getSession } from 'next-auth/react';
import React from 'react';

const Protected = ({ session }) => {

    return (
        <div>
            <h2 className="text-center text-3xl py-10">This is protected page</h2>
            <h2 className="text-center text-3xl py-10">You are logged in as &quot;{session?.user.name}&quot; </h2>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if (session) {
        return {
            props: { session }
        }
    }
    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }
}


export default Protected;