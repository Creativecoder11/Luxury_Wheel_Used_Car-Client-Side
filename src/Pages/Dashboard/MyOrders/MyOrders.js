import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const MyOrders = () => {
    const {user} = useContext(AuthContext)

    const url= `https://luxury-wheel-server.vercel.app/bookings?email=${user?.email}`

    const{data: bookings = [], refetch} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            refetch()
            return data
        }
    })
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product </th>
              <th>Modal Name</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
                bookings?.map((booking, i) => 
                    <tr key={i}>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="w-20 rounded">
                                  <img
                                  src={booking.image}
                                  alt="Avatar Tailwind CSS Component"
                                  />
                              </div>
                            </div>
                        </div>
                        </td>
                        <td>
                            {booking.item}
                        </td>
                        <td>{booking.price}</td>
                        <td>
                        {
                          booking.price && !booking.paid &&
                          <Link to={`/dashboard/payment/${booking._id}`}><button className="badge badge-outline badge-success hover:bg-green-500 hover:text-black ">Pay</button></Link>
                        }
                        {
                          booking.price && booking.paid &&
                          <button className="btn btn-ghost btn-xs">paid</button>
                        }
                        </td>
                    </tr> 
                )
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
