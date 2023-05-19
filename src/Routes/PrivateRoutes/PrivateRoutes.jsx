/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    
    if (loading) {
        return <div className="text-center container py-5 my-5">
            <Spinner animation="border" variant="danger" />
        </div>;
    }
    if (user) {
        return children;
    }


    return <Navigate to="/login" state={{from: location}} replace={true} ></Navigate>
};

export default PrivateRoutes;