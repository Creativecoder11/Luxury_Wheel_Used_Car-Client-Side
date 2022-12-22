import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../Hooks/useToken/useToken";
import ButtonBlack from "../Shared/Button/ButtonBlack";

const Login = () => {
  const { signin, loading, setLoading, signInWithGoogle } =
  useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [token] = useToken(userEmail)

  console.log(userEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if(token){
      return navigate(from, { replace: true });
    }
    signin(email, password)
      .then((result) => {
        console.log(result);
        toast.success("login Successful");
        setUserEmail(email)
        navigate(from, { replace: true });

      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
        setLoading(false);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      console.log(result)
      // setAuthToken(result.user);
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <div className="flex justify-center items-center pt-8 my-10" >
        <div className="flex flex-col max-w-md p-6  sm:p-10 border-4 border-black text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  onBlur={""}
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-black bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-black bg-gray-200 text-gray-900"
                />
              </div>
            </div>

            <div>
              <ButtonBlack
                type="submit"
                className="w-full px-8 py-3 text-white font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white"
              >
                Sign In
              </ButtonBlack>
            </div>
          </form>
          <div className="space-y-1">
            <button
              onClick={''}
              className="text-xs hover:underline text-gray-400"
            >
              Forgot password?
            </button>
          </div>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
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
            Don't have an account yet?{" "}
            <Link to="/signup" className="hover:underline font-bold text-gray-600">
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
