import { Request, Response } from "express"
import getEnderecoCep from "./getEnderecoCep"


const getEnderecoInfo = async(req: Request, res: Response) => {
    try {
        const cep = req.params
        const (bairro) = req.body
        const endereco = await getEnderecoCep(cep, bairro as string)
        
    } catch (error: any) {
        throw new Error();
    }
}

export default getEnderecoInfo;