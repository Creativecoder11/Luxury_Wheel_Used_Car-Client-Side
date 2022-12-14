import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutFrom = ({ products }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price, name, email } = products;

  useEffect(() => {
    fetch("https://luxury-wheel-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({price}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess('')
    
    const {paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
          payment_method: {
              card: card,
              billing_details: {
                  name: name,
                  email: email
              },
          },
      },
    );
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded"){
      setSuccess('Congrats! your payment completed')
      setTransactionId(paymentIntent.id)
    }
    setProcessing(false)

  };
    

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="w-full mt-5 px-8 py-3 text-white font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {
          success && <div>
              <p className='text-green-500'>{success}</p>
              <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
          </div>
      }
    </>
  );
};

export default CheckOutFrom;
