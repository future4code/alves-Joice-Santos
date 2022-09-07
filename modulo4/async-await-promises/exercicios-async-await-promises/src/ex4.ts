import axios from "axios"
import { baseURL } from "./baseURL"

const news = {
    title: "Novos livros divulgados",
    content: "Editoras divulgam lançamntos do segundo semestre de 2022.",
    date: Date.now()
}

const createNews = async (news: any) => {
    return axios.put(`${baseURL}/news`,news)
}
console.log(createNews)

const main = async () => {
    try {
        createNews(news)
        
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()
