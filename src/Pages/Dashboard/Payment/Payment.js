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
      <div className="card w-80 mx-auto mt-20">
        <h3 className="text">Payment for {products.item}</h3>
        <p>Price {products.price}</p>
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
