import Image from 'next/image';
import React from 'react';

const UserInfo = ({ user }) => {
  const {image, name, email} = user;
    return (
        <div className="rounded-3xl w-full py-4 overflow-hidden shadow-xl max-w-xs my-3 bg-gray-50 bg-opacity-10">
            <div className="flex justify-center">
                <Image src={image} height="200" width="200" alt={name} className="rounded-full border-solid border-white border-2 -mt-3" />
            </div>
            <div className="text-center px-3 pb-6 pt-2">
                <h3 className="text-white text-sm bold font-sans">{name}</h3>
                <p className="mt-2 font-sans font-light text-white">{email}</p>
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
    );
};

export default UserInfo;