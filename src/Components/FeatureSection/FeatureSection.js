import React from "react";
import banner from '../../Assets/how-it-work.webp'
import whiteCar from '../../Assets/white-car.webp'
import blackCar from '../../Assets/black-car.webp'
import ButtonBlack from "../../Pages/Shared/Button/ButtonBlack";

const FeatureSection = () => {
  return (
    <div>
      <section>
        <div className="container m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
          <div className="container mx-auto p-4 my-6 space-y-2 text-center">
            <h2 className="text-2xl lg:text-4xl font-bold">HOW IT WORKS</h2>
            <p className="dark:text-gray-400">Buying used luxury cars in Asia and Europe was never this easy. You can now own your dream luxury car <br/> in just 4 simple steps at Luxury Car, India's trusted used car portal.</p>
          </div>
          <div className="flex flex-col-reverse lg:flex-row  gap-20 items-center md">
            <div>
              <div>
                <p className="text-2xl font-semibold my-5">1. Submit Vehicle Details</p>
                <p>Just answer a few questions about your vehicle’s specific features, condition and location by filling out the form above or calling us at 855-306-9292.</p>
                <hr className="w-2/4 my-5 border-black border-1" />
              </div>
              <div>
                <p className="text-2xl font-semibold my-5">2. Get A Cash Offer</p>
                <p> If our acquisition specialists determine that we’d like to acquire your vehicle, we will promptly send you an offer. There is no obligation to accept our offer and it’s good for 7 days/100 miles: take your time to think it over.</p>
                <hr className="w-2/4 my-5 border-black border-1" />
              </div>
              <div>
                <p className="text-2xl font-semibold my-5">3. We Pick Up The Vehicle</p>
                <p>Just answer a few questions about your vehicle’s specific features, condition and location by filling out the form above or calling us at 855-306-9292.</p>
                <hr className="w-2/4 my-5 border-black border-1" />
              </div>
              <div>
                <p className="text-2xl font-semibold my-5">4. Receive Payment Via Wire Or ACH</p>
                <p>Once you’ve accepted our offer, we’ll book a time and location that suits you and we’ll come pick up your car. No sweat.</p>
                <hr className="w-2/4 my-5 border-black border-1" />
              </div>
            </div>
            <div>
              <img src={banner} className='w-3/5  lg:w-full mx-auto' alt="" srcset="" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-3xl lg:text-5xl text-center font-bold my-10">Ready To Sell Your Supercar?</p>
          <img src={blackCar} className='w-3/5 mx-auto' alt="" srcset="" />
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
