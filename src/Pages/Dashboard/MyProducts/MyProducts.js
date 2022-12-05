import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const MyProducts = () => {
  const { data: addProducts = [],refetch } = useQuery({
    queryKey: ["addProducts"],
    queryFn: async () => {
      const res = await fetch("https://luxury-wheel-server.vercel.app/addproduct");
      const data = await res.json();
      return data;
    },
  });

  const handleAdvertise = (addproduct) => {
    fetch(`https://luxury-wheel-server.vercel.app/products/${addproduct._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`${addproduct.name} advertise successfully!`);
          refetch();
        }
      });
  };


  const handleDelete = addproduct => {
    fetch(`https://luxury-wheel-server.vercel.app/addproduct/${addproduct._id}`, {
          method: 'DELETE',
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            refetch()
            toast.success('Product Deleted Successfully')
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
              <th>Image</th>
              <th>Product Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                addProducts.map((addproduct, i) =>  
                <tr key={addproduct._id}>
                    <th>{i+1}</th>
                    <td><img src={addproduct.image} alt="" className="w-20" srcset="" /></td>
                    <td>{addproduct.name}</td>
                    <div >
                        <td>
                        {
                          addproduct.isAdvertise ? (
                            <span>Advertised</span>
                          ) : (
                            <button onClick={() => handleAdvertise(addproduct)} className="badge badge-outline badge-success hover:bg-green-500 hover:text-black ">Advertise</button>
                          )
                        }
                        </td>
                        <td><button onClick={() => handleDelete(addproduct)} className="badge badge-outline badge-error hover:bg-red-500 hover:text-black ">Delete</button></td>
                        
                    </div>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
