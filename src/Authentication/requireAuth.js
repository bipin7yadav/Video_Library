import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./authContext";

function RequireAuth({ children }) {
    const { token } = useSelector(store => store.login);
    const location = useLocation();

    return token ? (children) : (
        <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth;