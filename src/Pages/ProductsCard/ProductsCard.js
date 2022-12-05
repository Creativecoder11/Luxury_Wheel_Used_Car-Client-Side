import React from 'react';
import ButtonBlack from '../Shared/Button/ButtonBlack';
import { BiCurrentLocation } from "react-icons/bi";
import toast from 'react-hot-toast';

const ProductsCard = ({product, setBookingProduct}) => {
    const {
        category,
        name,
        condition,
        image,
        sellerName,
        location,
        originalPrice,
        used,
        resalePrice,
        postTime,
      } = product;

      const handleReportItem = (product) => {
        const agree = window.confirm(
          `Do you want to report this product named ${product.name}`
        );
        if (agree) {
          fetch(`https://server-xi-fawn.vercel.app/reportedProducts/${product._id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
              if (data.matchedCount > 0) {
                toast.success(`${product.name} reported successfully!`);
              }
            });
        }
      };
    
    return (
        <div>
            <div className="card w-full bg-base-100 rounded-2xl shadow-lg mb-10 hover:shadow-2xl h-[80vh] ">
                <figure>
                    <img src={image} style={{width: '400px', height: '250px'}} alt="Shoes" />
                </figure>
                <div className="py-4 px-5">
                    <h2 className="card-title justify-between">
                    {name}
                     <button onClick={() => handleReportItem(product)} className="btn btn-outline btn-sm mt-5 text-xs ml-3">Report <br/> Admin</button>
                    </h2>
                    <div className='flex justify-between font-semibold mt-4'>
                        <p>Category: {category}</p>
                        <h2>Type: {condition}</h2>
                    </div>
                    <div className='flex justify-between mt-2 font-semibold '>
                        <div className='flex items-center'>
                            <BiCurrentLocation></BiCurrentLocation>
                            <p className='ms-2'>{location}</p>
                        </div>
                        <p> <span className='font-semibold'>{used}</span> Years Of Used</p>
                    </div>
                </div>
                <div className="bg-slate-300 flex py-3 ">
                    <div className='mx-auto'>
                        <p className="border-2 border-black rounded-full px-2 line-through text-sm">Market Price: {originalPrice}</p> 
                        <p className="text-4xl font-bold mt-2">{resalePrice}</p>
                    </div>
                </div>
                <div className='flex justify-around  px-5 py-5'>
                    <div>
                        <p>{sellerName}</p>
                        <p>Post On:{postTime}</p>
                    </div>
                    <div>
                        <label 
                        onClick={() => setBookingProduct(product)} 
                        htmlFor="booking-modal" 
                        className="px-5 py-3 btn-sm btn-outline hover:bg-black hover:border-black border-4 border-black text-black font-semibold hover:text-white">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;