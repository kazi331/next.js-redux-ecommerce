import React from 'react';
import { discordIcon, githubIcon, googleIcon } from './icons';
import { signIn, signOut } from 'next-auth/react'

const SocialLogin = ({ returnTo }) => {
    
    return (
        <div className="bg-gray-50 rounded-t-lg border-t-4 p-8">
            <p className="text-center  font-light">
                Sign in with
            </p>
            <div>
                <div className="flex items-center justify-center space-x-4 mt-3">
                    <button onClick={() => signIn('github', { callbackUrl: returnTo })} className="flex items-center scale-125 p-2 rounded-full uppercase bg-white hover:bg-gray-100 text-[#10B981] border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        {githubIcon}
                    </button>
                    <button onClick={() => signIn('google', { callbackUrl: returnTo })} className="flex items-center scale-125 p-2 rounded-full uppercase bg-white hover:bg-gray-100 text-[#10B981] border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        {googleIcon}
                    </button>
                    <button onClick={() => signIn('discord', { callbackUrl: returnTo })} className="flex items-center scale-125 p-2 rounded-full uppercase bg-white hover:bg-gray-100 text-[#10B981] border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        {discordIcon}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;