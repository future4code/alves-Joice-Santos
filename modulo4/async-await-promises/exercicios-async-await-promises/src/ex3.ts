import axios from "axios"
import { baseURL } from "./baseURL"

type subscriber ={
    id: string,
    name:string,
    email: string
}

const getSubscribers = async (): Promise<subscriber[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

const main = async () => {
    try {
        const subscribers = await getSubscribers()
        console.log(subscribers)
        
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()