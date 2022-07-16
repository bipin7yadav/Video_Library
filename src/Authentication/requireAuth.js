import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
    const { status } = useSelector(store => store.login);
    const location = useLocation();

    return status ? (children) : (
        <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth;