import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo-w.png";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from "react-hot-toast";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success(`${user?.displayName} Logout Successfuly!`);
        navigate('/')
      })
      .catch((error) => console.log(error));
  };
  const mobileMenuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        {user?.uid ? (
          <>
            <Link to="/dashboard">DashBoard</Link>
            <button onClick={handleLogOut}>Sign Out</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
      <li>
        <Link>
          {user?.photoURL ? (
            <img
              className=" w-10 h-10 rounded-full ring ring-white ring-offset-base-100 ring-offset-1"
              src={user?.photoURL}
              alt=""
            />
          ):(
            <></>
          )
        }
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={2}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-b-md text-white w-52"
            >
              {mobileMenuItems}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} className='w-40 lg:w-full' alt="" srcset="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal p-0 text-white">
            <li className="px-5 py-2 text-lg font-semibold border-2  hover:bg-white hover:text-black mr-5">
              <Link to="/">Home</Link>
            </li>
            <li className="px-5 py-2 text-lg font-semibold border-2  hover:bg-white hover:text-black">
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <Link>
            {user?.uid ? (
              <>
                <Link
                  className="px-5 py-3 mr-5 text-lg text-white font-semibold border-2  hover:bg-white hover:text-black"
                  to="/dashboard"
                >
                  Dashboard
                </Link>

                <Link
                  className="px-5 py-3 text-white text-lg font-semibold border-2  hover:bg-white hover:text-black"
                  onClick={handleLogOut}
                >
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="px-5 py-3 text-lg text-white font-semibold border-2  hover:bg-white hover:text-black"
                  to={"/login"}
                >
                  Login
                </Link>
                <Link
                  className="px-5 py-3 ml-4 text-white text-lg font-semibold border-2  hover:bg-white hover:text-black"
                  to={"/signup"}
                >
                  Register
                </Link>
              </>
            )}
          </Link>

          <Link>
            {user?.photoURL ? (
              <img
                className=" ml-5 w-10 h-10 rounded-full ring ring-white ring-offset-base-100 ring-offset-2"
                src={user?.photoURL}
                alt=""
              />
              ):(
                <>
                </>
              )
            }
          </Link>
        </div>
          <label htmlFor="dashboard-drawer" tabIndex={0} className="navbar-end btn btn-ghost lg:hidden">
            <MdOutlineArrowDropDownCircle className="text-white text-2xl"/>
          </label>
      </div>
    </div>
  );
};

export default Navbar;
