import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from '../ProductsCard/ProductsCard';
import BookingModal from '../Shared/BookingModal/BookingModal';

const Products = () => {
    const [bookingProduct, setBookingProduct] = useState(null);
    const getProduct = useLoaderData()
    return (
        <div className='max-w-screen-lg mx-auto'>
            <h2 className='text-4xl font-bold text-center py-6'>Used Car Products {getProduct.length} </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    getProduct?.map(product => 
                    <>
                    <ProductsCard
                        key={product._id}
                        product={product}
                        setBookingProduct={setBookingProduct}
                    />
                    </>
                    )
                }
            </div>
                {
                    bookingProduct &&
                    <BookingModal
                        bookingProduct={bookingProduct}
                        setBookingProduct={setBookingProduct}
                    ></BookingModal>
                }
        </div>

    );
};

export default Products;