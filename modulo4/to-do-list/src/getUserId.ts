import { Request, Response } from "express";
import userId from "./data/UserId";


export default async function getUSerId(req: Request, res: Response) {
    try {
        const user =  await userId(req.params.id)

        if (!user) {
            res.status(400).send('usuário não encontrado')
        }

        res.status(200).send({id: user.id, nickname: user.nickname})
        
    } catch (error: any) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}