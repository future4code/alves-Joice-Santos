import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url , {
            headers: {
                Authorization:localStorage.getItem('token')
            }
        })
        .then((Response) => {
            setData(Response.data)
        })
        .catch((Error) => {
            alert('Ocorreu um erro')
        })
    }, [url])

    return (data)
}

export default useRequestData