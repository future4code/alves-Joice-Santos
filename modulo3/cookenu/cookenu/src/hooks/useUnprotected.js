import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToHome, goToLogin } from "../routes/Coordinator";

const useUnprotected = () => {
    const navigate = useNavigate()
    useLayoutEffect(()=> {
        const token = localStorage.getItem('token')
        if (token){
            goToHome(navigate)
        }
    }, [navigate])
}

export default useUnprotected