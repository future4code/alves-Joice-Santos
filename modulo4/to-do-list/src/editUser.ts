import { Request, Response } from "express";
import updateUser from './data/UpdateUser'



export default async function editUser(req: Request, res: Response) {
    try {
        if (req.body.name === '' || req.body.nickname === '' || req.body.email === '') {
            res.status(400).send({message:"Nenhum dos campos podem estar em branco."})
        }

        if (!req.body.name && !req.body.nickname && !req.body.email) {
            res.status(400).send({message: "preencha os campos"})
        }
        await updateUser(
            req.body.name | req.body.nickname | req.body.email
        )

        res.status(200).send({message:`Usuário Atualizado`})
        
    } catch (error: any) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}