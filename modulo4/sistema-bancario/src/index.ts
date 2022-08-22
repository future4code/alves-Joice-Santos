import express, { Request, Response } from "express"
import cors from "cors"
import { User, users, Transaction } from "./data"
import { error } from "console"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
            if (!users.length) {
                errorCode = 404
                throw new Error("Conta não encontrada")
            } 
            res.status(200).send(users)
        
    } catch (error: any) {
        res.status(errorCode).send({message: error.message})
    }
})

app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const { nome, CPF, dataNascimento} = req.body

    const idade: number = Date.now() - dataNascimento

    const idadeAnos: number = idade /1000 / 60 / 60 / 24 / 365

    if (idadeAnos < 18){
      errorCode = 406
      throw new Error("Idade deve ser maior que 18 anos")
    }

    const newUser: User = {
      nome,
      CPF,
      dataNascimento,
      saldo: 0,
      extrato: []
    }
    users.push(newUser)
    res.status(201).send({ message: "Usuário criado com sucesso" })

    if (!nome || !CPF || !dataNascimento ) {
      errorCode = 422
      throw new Error("Por favor, verifique os campos!")
    }
   
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message })
  }
})

app.get("/users/:cpf", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const CPF = req.params.CPF
    const user = users.find(user => user.CPF == CPF)
    if(!user) {
      res.statusCode = 404
      throw new Error("Cliente não encontrado")
    }
    res.status(200).send({saldo: user.saldo})
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message })
  }
})

app.put("/users/:cpf", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const {CPF, nome} = req.params

    if(!CPF, !nome){
      res.statusCode = 400
      throw new Error("Verifique os dados informados")
    }
    
    let saldoAtualizado = users.find(saldo: users.saldo){
      saldoAtualizado = users.saldo + valor
    }
  } catch (error: any) {
    
  }
})


app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
})
