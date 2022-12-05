import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {
    const { data: buyers = [], refetch} = useQuery({
        queryKey: ["buyers"],
        queryFn: async () => {
          const res = await fetch("https://luxury-wheel-server.vercel.app/buyer");
          const data = await res.json();
          return data;
        },
      });
    
      const handleDeleteBuyer = buyer => {
        fetch(`https://luxury-wheel-server.vercel.app/buyer/${buyer._id}`, {
          method: 'DELETE',
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            refetch()
            toast.success('Buyer Deleted Successfully')
          };
        })
      }

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
            </tr>
          </thead>
          <tbody>
              {
                buyers.map((buyer,i) => (
                  <tr key={buyer._id}>
                    <th>{i+1}</th>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    <td><button onClick={() => handleDeleteBuyer(buyer)} className="badge badge-outline badge-danger hover:bg-red-500 hover:text-black ">Delete</button></td>
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

export default AllBuyer;