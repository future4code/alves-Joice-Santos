// a) get.

// b) usando o async function <any[]>

import axios from "axios"
import { baseURL } from "./baseURL"

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
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