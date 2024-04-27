import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FallingLines } from "react-loader-spinner";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className="text-center">
                <FallingLines
                    color="#4fa94d"
                    width="300"
                    visible={true}
                    ariaLabel="falling-circles-loading"
                />
            </div>

        )
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}