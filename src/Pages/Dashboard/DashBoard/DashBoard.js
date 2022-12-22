import React from 'react';
import image from '../../../Assets/logo-b.png'

const DashBoard = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row text-5xl text-black font-bold gap-5 justify-center items-center h-screen'>
                <p>WELCOME TO</p> 
                <p><img src={image} alt="" srcset="" /></p>
                <p>DASHBOARD</p>
            </div>
        </div>
    );
};

export default DashBoard;