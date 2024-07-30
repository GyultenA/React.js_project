/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../context/authContext";


export default function AuthGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

//in App.jsx
//<Route path='/profile' element={<AuthGuard>  <Profile /> </AuthGuard>} />