import express, { Request, response, Response } from "express"
import cors from "cors"
import { produtos, listaProdutos } from "./data"
import { request } from "http"

const app = express()

app.use(express.json())
app.use(cors())

//exercicio 1
app.get("/test", (req: Request, res: Response) => {
    res.send("Até aqui tudo bem!")
})

//exercicio 3
app.post("/cadastrarProduto", (req: Request, res:Response) => {
    try {
        const novoProduto: produtos = {
            id: Date.now().toString(),
            name: req.body.name,
            price: req.body.price
        }
        listaProdutos.push(novoProduto)

        response.send(listaProdutos)

    } catch (error: any) {
        response.status(response.statusCode || 500).send({message: error.message})
    }
})

//exercicio 4
app.get("/produtos", (req: Request, res:Response) => {
    try {
       res.send(listaProdutos)
    } catch (error: any) {
       res.status(res.statusCode || 500).send({message: error.message})
    }
    
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})