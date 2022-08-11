import axios from "axios";
import { BaseUrl } from "../constants/urls";

const addRecipe = (body, clear) => {
    axios.post(`${BaseUrl}/recipe`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((Response)=> {
        alert(Response.data.message)
        clear()
    })
    .catch((Error) => alert(Error.Response.message))
}

export default addRecipe