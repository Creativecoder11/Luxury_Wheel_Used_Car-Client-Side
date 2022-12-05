import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";



const AllSeller = () => {
  const { data: sellers = [],refetch} = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch("https://luxury-wheel-server.vercel.app/seller");
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = seller => {
    fetch(`https://luxury-wheel-server.vercel.app/seller/${seller._id}`, {
          method: 'DELETE',
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            refetch()
            toast.success('Seller Deleted Successfully')
          };
        })
  }

  const handleVerify = (seller) => {
    fetch(`https://luxury-wheel-server.vercel.app/seller/verify/${seller._id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`Seller ${seller.name} verified!`);
          refetch();
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {
                sellers.map((seller,i) => (
                  <tr key={seller._id}>
                    <th>{i+1}</th>
                    <td>{seller.name}</td>
                    <td>{seller.email}</td>
                    <td>
                        {
                        seller.isVerify ? (
                          <span>Verified</span>
                        ) : (
                            <button onClick={() => handleVerify(seller)} className="badge badge-outline badge-success hover:bg-red-500 hover:text-black " >Verify</button>
                         
                        )
                        }
                    </td>
                    <td><button onClick={() => handleDelete(seller)} className="badge badge-outline badge-error hover:bg-red-500 hover:text-black ">Delete</button></td>
                  </tr>
                ))
              }
            
          </tbody>
        </table>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default AllSeller;
