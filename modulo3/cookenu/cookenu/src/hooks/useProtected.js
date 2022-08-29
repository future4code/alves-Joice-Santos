import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToLogin } from "../routes/Coordinator";

const useProtected = () => {
    const navigate = useNavigate()
    useLayoutEffect(()=> {
        const token = localStorage.getItem('token')
        if (!token){
            goToLogin(navigate)
        }
    }, [navigate])
}

export default useProtected