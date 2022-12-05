import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://luxury-wheel-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const handleAdmin = id => {
    fetch(`https://luxury-wheel-server.vercel.app/users/admin/${id}`, {
        method: 'PUT',
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
        if(data.modifiedCount > 0){
          toast.success('Make admin successful')
          refetch()
        };
    } )
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                    user?.role !== 'admin' ? 
                    <button
                    onClick={() => handleAdmin(user?._id)}
                    className="btn btn-sm"
                    >
                    Make Admin
                  </button>
                    :
                    <span className="bg-green border-2 p-1 rounded-lg border-green-700">Admin Created</span> 
                  
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
