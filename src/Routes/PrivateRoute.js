import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, Loading} =useContext(AuthContext);
    const location = useLocation();
    if(Loading){
        return <Spinner animation="border" variant="dark" />
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;

    
};

export default PrivateRoute;