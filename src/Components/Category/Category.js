import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../Pages/Shared/Spinner/Spinner';
import logo from '../../Assets/logo-b.png'


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
            <div className='text-center text-2xl lg:text-4xl font-bold my-10'>
                <div>BROWSE <span className='text-3xl lg:text-5xl text-blue-900'>LUXURY WHEEL</span> <br/>
                    DATABASE OF NEW LUXURY <br/>
                    CARS IN WORLD</div>
            </div>
            <h2 className='text-2xl font-semibold text-center lg:text-left lg:text-4xl animate-bounce lg:pl-20'>Shop Your Brand</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 my-12'>
                { 
                    categories.map((c, i) => 
                    <div key={i} c={c}>
                        <Link to={`/products/${c.category_id}`} class="group block max-w-xs max-h-full mx-auto p-6 border-black bg-white shadow-2xl rounded-xl my-5 md:my-0 hover:bg-black hover:scale-95 hover:animate-spin">
                            <div className="flex items-center justify-center h-40 gap-5">
                                <img className='w-28' src={c.logo} alt="" srcset="" />
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