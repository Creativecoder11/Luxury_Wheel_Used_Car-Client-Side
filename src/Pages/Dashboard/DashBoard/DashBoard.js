import React from 'react';
import image from '../../../Assets/logo-b.png'

const DashBoard = () => {
    return (
        <div>
            <div className='flex text-5xl font-bold gap-5 justify-center items-center h-screen'>
                <p>Welcome to</p> 
                <p><img src={image} alt="" srcset="" /></p>
                <p>DashBoard</p>
            </div>
        </div>
    );
};

export default DashBoard;