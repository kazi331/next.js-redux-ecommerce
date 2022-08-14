import React, { useState } from 'react';

const About = () => {
    const [blue, setBlue] = useState(false)

    const sky = true;

    const blueColor = sky ? 'text-blue-400' : 'text-green-400';


    return (
        <div className='py-10 text-center'>
            <h2 className='text-sky-400'>About Us</h2>
            <p className={`border-2 border-sky-500 py-4 ${blue ? 'text-blue-400 text-2xl' : 'text-red-400'}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ab.</p>
            <button onClick={() => setBlue(!blue)} className='ring-1 py-1 px-3'>Make text blue</button>
        </div>
    );
};

export default About;