import { getSession, useSession } from 'next-auth/react';
import React from 'react';
import Loading from '../components/Loading';
import UserInfo from '../components/UserInfo';

const Dashboard = ({ session }) => {
    if (session) {
        return (<>
            <h2 className='text-center text-xl pt-4'>Dashboard</h2>
            <div className="flex w-full items-center justify-center">
                <UserInfo {...session} />
            </div>
        </>
        );
    }
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }
    return {
        props: {
            session
        }
    }
}

export default Dashboard;