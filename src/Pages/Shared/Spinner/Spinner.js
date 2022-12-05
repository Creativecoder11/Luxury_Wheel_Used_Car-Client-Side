import React from 'react';
import image from '../../../Assets/9e9c68435731c23c00573a1544d539b3.gif'

const Spinner = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-full'>
                <img className='w-full' src={image} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Spinner;