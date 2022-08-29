import { Request, Response } from "express";
import { updateUser } from './data/UpdateUser'



export default async function editUser(req: Request, res: Response) {
    try {
        const id: string =  req.params.id

        const { name, nickname, email }: updateUser = req.body

        if (name === '' || nickname === '' || email === '') {
            throw new Error(`Nenhum dos campos podem estar em branco.`)
        }

        if (!name && !nickname && !email) {
            throw new Error(`preencha os campos`)
        }
        await updateUser(id, updateUser)

        res.status(200).send({message:`Usuário Atualizado`})
        
    } catch (error: any) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}