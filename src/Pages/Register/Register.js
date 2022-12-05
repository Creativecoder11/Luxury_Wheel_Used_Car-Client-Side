import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../Hooks/useToken/useToken";
import ButtonBlack from "../Shared/Button/ButtonBlack";



const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading, setLoading } =
    useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation()
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail)
    const from = location?.state?.from?.pathname || '/'
   
    if(token){
      navigate('/')
    }
    
    
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const image = form.image.files[0];
      const role = form.userRole.value
      const password = form.password.value;
      console.log(name, email, image, password, role);

      // REACT_APP_IMGBB_KEY

    const formData = new FormData();
    formData.append("image", image);
    
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=4655ebc89a3bf6ba2197737e71a73ff3`;
    
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        createUser(email, password)
        .then((result) => {
          // setAuthToken(result.user);
          console.log(result);
          toast.success("User Registration Successful!!")
          updateUserProfile(name, imageData.data.display_url)
          .then((res) => {
            saveUser(name, email, role)
            
          });
        })      
        .catch(err => {
          console.log(err)
          setLoading(false)
        })
        })
      .catch(err => console.log(err))      
    }

    const handleGoogleSignIn = () => {
      signInWithGoogle().then(result => {
        console.log(result)
        // setAuthToken(result.user);
      })
      navigate(from,{replace: true})
    }

    const saveUser = (name, email, role) => {
      const user = {name, email, role}
      fetch('https://luxury-wheel-server.vercel.app/users', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        setCreatedUserEmail(email)
      })
    }




  return (
    <div>
      <div className="flex justify-center items-center pt-8">
        <div className="flex flex-col max-w-md p-6 my-10 sm:p-10 border-4 border-black text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Signup</h1>
            <p className="text-sm text-gray-400">Create a new account</p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Name</label>
                <input
                  type="text"
                  name="nameName"
                  id="name"
                  required
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-black bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-black bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-black text-gray-900"
                />
              </div>
              <div>
              <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Select Your Role</span>
                  </label>
                  <select  name='userRole' className="select select-bordered">
                    <option selected >Buyer</option>
                    <option >Seller</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <ButtonBlack
                  type="submit"
                  className="w-full px-8 py-3 text-white font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white "
                >
                  Sign up
                </ButtonBlack>
              </div>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Signup with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4 mt-3">
            <button
              onClick={handleGoogleSignIn}
              aria-label="Log in with Google"
              className="flex px-10 py-2 items-center gap-2 btn-outline rounded-full hover:bg-black border-2 "
            >
              <FaGoogle ></FaGoogle>
              <p>Sign In with Google</p>
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Already have an account yet?{" "}
            <Link to="/login" className="hover:underline text-gray-600">
              Sign In
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
