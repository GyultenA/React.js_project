import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../../api/authService';
import Path from "../../utils/paths";
import AuthContext from "../../context/authContext";


export default function Logout(){
    const navigate = useNavigate();
    const {logoutHandler} = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => {
                logoutHandler();
                navigate(Path.Home);
            })
            .catch((err) => {
                logoutHandler();
                navigate(Path.Home);
                throw err;
            });
    }, []);

    return null;
}