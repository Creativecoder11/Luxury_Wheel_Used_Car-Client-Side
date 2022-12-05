import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../Pages/Shared/Spinner/Spinner';


const Category = () => {

    const {data:categories = [], isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('https://luxury-wheel-server.vercel.app/category')
        .then(res => res.json())
    })
    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className='text-center text-4xl font-bold mt-5'>
                <h1>BROWSE <span className='text-[#0309b2] text-5xl'>LUXURY WHEEL</span> <br/>
                    DATABASE OF NEW LUXURY <br/>
                    CARS IN WORLD</h1>
            </div>
            <h2 className='text-4xl font-bold pl-20'>Shop Your Brand</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 my-12'>
                { 
                    categories.map((c, i) => 
                    <div key={i} c={c}>
                        <Link to={`/products/${c.category_id}`} class="group block max-w-xs max-h-full mx-auto p-6 border-black border-4 bg-white shadow-lg  hover:bg-black">
                            <div className="flex items-center justify-center h-40 gap-5">
                                <img className='w-40' src={c.logo} alt="" srcset="" />
                                <h3 className="mt-2 group-hover:text-white text-center text-2xl font-semibold">{c.category}</h3>
                            </div>
                        </Link>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Category;