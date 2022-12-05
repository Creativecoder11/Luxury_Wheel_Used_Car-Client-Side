import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AddProducts from '../../Pages/Dashboard/AddProducts/AddProducts';
import ProductsCard from '../../Pages/ProductsCard/ProductsCard';
import AdvertiseCard from './AdvertiseCard';

const AdvertiseItem = () => {

    const{data: advertiseProduct = []} = useQuery({
        queryKey: ['advertiseProduct'],
        queryFn: async () => {
            const res = await fetch('https://luxury-wheel-server.vercel.app/products')
            const data = await res.json()
            return data
        }
    })
    

    return (
        <div>
            <h2 className='text-4xl font-bold pl-20 mt-5'>Advertise Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-20 my-12"> 
                {
                    advertiseProduct?.map(product => <ProductsCard
                        key={product._id}
                        product={product}
                    ></ProductsCard> )

                }
            </div>
        </div>
    );
};

export default AdvertiseItem;