import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutFrom from "./CheckOutFrom";

const stripePromise = loadStripe("pk_test_51M6WjAKJdaP9PucBAX0upTT67iCsshkPuapR8SPvGjvAJAeHfJXzqtRDDyjsGG8UJJ1WNPv96LfBDE6tnNS6MOkA00ivf9iRnX");

const Payment = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <div className="card border-4 border-black p-5 w-2/4 mx-auto mt-20">
        <h3 className="text-2xl text-center">Payment for <span className="font-bold">{products.item}</span></h3>
        <p className="text-center font-bold mt-2">Price {products.price}</p>
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckOutFrom 
            products={products}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
