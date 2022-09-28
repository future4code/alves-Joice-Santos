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

const sendNotifications = async (
    subscribers: subscriber[],
    message: string
): Promise<void> => {
    try {
        for (const subscriber of subscribers) {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: subscriber.id, message
            })
        }
        
    } catch (error:any) {
        console.log("mensagem de erro")
    }
   
}

const main = async () => {
    try {
       
        console.log(sendNotifications)
        
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()