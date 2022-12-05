import React from 'react';
import video from '../../../Assets/bg-video.mp4'
const Banner = () => {
    return (
        <div>
            <video className='videoTag w-full h-full' autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </video>
        </div>
    );
};

export default Banner;