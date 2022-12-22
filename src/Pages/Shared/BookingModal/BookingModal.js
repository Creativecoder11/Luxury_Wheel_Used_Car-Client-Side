import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";
import ButtonBlack from "../Button/ButtonBlack";

const BookingModal = ({ bookingProduct, setBookingProduct }) => {
  const { name, resalePrice, image } = bookingProduct;
  console.log(bookingProduct);
  const { user } = useContext(AuthContext);

  const handleModal = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const item = form.item.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;

    console.log(name, email, phone, item, price, location);

    const bookings = { 
      name,
      email,
      item,
      price,
      phone,
      location,
      image
    }
    console.log(bookings);

    fetch('https://luxury-wheel-server.vercel.app/bookings', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(bookings)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.acknowledged === true){
            setBookingProduct(null)
            toast.success('Booking Successfully Submitted')
          }else{
            toast.error(data.message)
            form.reset()
          }
        })
  };
  return (
    <div>
      <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form
              onSubmit={handleModal}
              className="grid grid-cols-1 gap-5 mt-8 "
            >
              <h2 className="font-bold text-3xl text-center">
                Booking Confirmation 
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                  <img src={image} className='rounded-lg' alt="" srcset="" />
                </div>
                <div className="mx-5">
                  <label className="-mb-4 ml-4">
                    <span className=" text-xs">Full Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    defaultValue={user?.displayName}
                    className="input input-md w-full"
                    disabled
                  />
                  <label className="-mb-4 ml-4">
                    <span className=" text-xs">Email</span>
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    defaultValue={user?.email}
                    disabled
                    className="input input-md w-full"
                  />
                  <label className="-mb-4 ml-4">
                    <span className=" text-xs">Item Name</span>
                  </label>
                  <input
                    name="item"
                    type="text"
                    placeholder="Item Name"
                    defaultValue={bookingProduct?.name}
                    disabled
                    className="input input-md w-full"
                  />
                  <label className="-mb-4 ml-4">
                    <span className=" text-xs">Item Price</span>
                  </label>
                  <input
                    name="price"
                    type="text"
                    defaultValue={resalePrice}
                    disabled
                    placeholder="Phone Number"
                    className="input input-md w-full"
                  />
                  <label className="mb-4 ml-4">
                    <span className=" text-xs">Phone Number</span>
                  </label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    className="input input-md w-full"
                  />
                  <label className="mb-4 ml-4">
                    <span className=" mb-4 text-xs">Your Location</span>
                  </label>
                  <input
                    name="location"
                    type="text"
                    placeholder="Location"
                    className="input input-md w-full"
                  />
                  <ButtonBlack
                    type="submit"
                    className="mt-5 w-full px-8 py-3 text-white font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white"
                  >
                    Submit
                  </ButtonBlack>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
