import React from 'react';
import { discordIcon, githubIcon, googleIcon } from './icons';
import { signIn, signOut } from 'next-auth/react'

const SocialLogin = () => {
    return (
        <div className="bg-gray-50 rounded-t-lg border-t-4 p-8">
            <p className="text-center  font-light">
                Sign in with
            </p>
            <div>
                <div className="flex items-center justify-center space-x-4 mt-3">
                    <button onClick={() => signIn('github')}  className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-[#10B981] border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        {githubIcon}
                        Github
                    </button>
                    <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-[#10B981] border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        {googleIcon}
                        Google
                    </button>
                    <button onClick={() => signIn('discord')} className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-[#10B981] border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        {discordIcon}
                        Discord
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;