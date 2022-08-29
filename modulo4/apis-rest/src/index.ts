import express, { Request, response, Response } from "express"
import cors from "cors"
import { users, User} from "./data"

const app = express()

app.use(express.json())
app.use(cors())

//exercicio 1
// a- método get.
// b- entidade users.
app.get("/users", (req:Request, res: Response) => {
    try {
        res.send(users)
    } catch (error: any) {
        res.status(response.statusCode).send({message: error.message})
        
    }
})

//exercicio 2

app.get("/users/type", (req:Request, res: Response) => {
let errorCode: number = 400
try{
    const type: string = req.query.type as string
    const typeUser: User [] = users.filter((typeUser) => typeUser.type===type)
    if(typeUser.length===0){
        errorCode = 404
        throw new Error("Usuario não encontrado")
    }
    res.status(200).send(typeUser)
}catch(error: any){
    res.status(errorCode).send({message: error.message})
}
})

//exercicio 3
app.get("/users/:name",(req:Request, res: Response) => {
    let errorCode: number = 400 
    try {
        const name: string = String(req.params.name)

        const userName = users.find((User) => {
            return User.name === name
        })
        if (!userName) {
            errorCode = 404
            throw new Error("Usuario não encontrado")
        }
        res.status(200).send(userName)
    } catch (error: any) {
        res.status(errorCode).send({message:error.message})
    }
})

//exercicio 4
app.put("/users", (req:Request, res: Response) => {
    let errorCode: number = 400  
    try {
        const {id, name, email, type, age} = req.body

        if (!id || !name || !email || !type || !age) {
            errorCode = 422
            throw new Error("Por favor, verifique os campos!")
        }

        const addUser: User = {
            id,
            name,
            email,
            type,
            age
        }

        users.push(addUser)

        res.status(201).send({message: "Usuario adicionado com sucesso"})
    } catch (error:any) {
        res.status(errorCode).send({message: error.message})
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})