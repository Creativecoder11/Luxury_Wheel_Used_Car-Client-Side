import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin/useAdmin";
import useSeller from "../Hooks/useSeller/useSeller";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile drawer-end">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <Outlet></Outlet>
            
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              {
                 !isSeller && !isAdmin &&
                <Link to='/dashboard/myorders'>My Orders</Link>
              }
              {
                  isAdmin && 
                  <>
                    <Link to='/dashboard/allbuyer'>All Buyer</Link>
                    <Link to='/dashboard/allseller'>All Seller</Link>
                    <Link to='/dashboard/allusers'>Make Admin</Link>
                    <Link to='/dashboard/reportitem'>Reported Items</Link>
                  </>
              }
            </li>
            <li>
              {
                isSeller && 
                <>
                  <Link to='/dashboard/addproduct'>Add Products</Link>
                  <Link to='/dashboard/myproduct'>My Products</Link>
                </>
              }
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
