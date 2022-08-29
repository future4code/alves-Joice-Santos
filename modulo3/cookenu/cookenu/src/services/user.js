import axios from "axios"
import { BaseUrl } from "../constants/urls"
import { goToHome } from "../routes/Coordinator"

export const login = (body, clear, navigate) => {
    axios.post(`${BaseUrl}/user/login`, body)
    .then((Response)=>{
        localStorage.setItem("token", Response.data.token)
        clear()
        goToHome(navigate)
    })
    .catch((Error)=>alert(Error.Response.data.messsage))
}

export const signUp = (body, clear, navigate) => {
    axios.post(`${BaseUrl}/user/signup`, body)
    .then((Response)=>{
        localStorage.setItem("token", Response.data.token)
        clear()
        goToHome(navigate)
    })
    .catch((Error)=>alert(Error.Response.data.messsage))
}