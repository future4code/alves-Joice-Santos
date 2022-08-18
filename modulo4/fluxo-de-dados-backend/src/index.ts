import express, { Request, Response } from "express"
import cors from "cors"
import { produtos, listaProdutos } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

//exercicio 1
app.get("/test", (req: Request, res: Response) => {
    res.send("Até aqui tudo bem!")
})

//exercicio 2
app.get("/produtos", (req: Request, res:Response) => {
     
})


app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})