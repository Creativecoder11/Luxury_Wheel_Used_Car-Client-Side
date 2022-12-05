import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin/useAdmin';
import Spinner from '../Pages/Shared/Spinner/Spinner';

const AdminRoute = ({children}) => {
    const {user, Loading} =useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();
    if(Loading || isAdminLoading ){
        return <Spinner></Spinner>
    }

    if(user && isAdmin ){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>

    
};

export default AdminRoute;