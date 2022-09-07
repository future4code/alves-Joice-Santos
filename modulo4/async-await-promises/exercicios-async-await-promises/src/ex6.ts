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

const sendNotifications = async (ids: string[]): Promise<void> => {
    try {
        const requests = ids.map(id =>
            axios.post(`${baseURL}/notifications`, {
                subscriberId: id,
                message: "Confira as últimas notícias"
            }))
        await Promise.all(requests)
        console.log(`Notificações enviadas com sucesso`)
    } catch (erro) {
        console.log(`Erro ao enviar notificação`)
    }
}

const main = async (): Promise<void> => {
    try {
        const subscribers = await getSubscribers()
        await sendNotifications
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()