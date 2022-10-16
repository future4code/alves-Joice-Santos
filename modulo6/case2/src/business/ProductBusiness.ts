import { ProductsDatabase } from "../database/ProductsDatabase"
import { NotFoundError } from "../errors/NotFoundError"
import { ConflictError} from "../errors/ConflictError"
import { ParamsError} from "../errors/ParamsError"
import {Product, IProductDB } from "../models/Products"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { AuthenticationError } from "../errors/AuthenticationError"
import { Request, Response } from "express"
import { products } from "../database/migrations/data"

export class ProductBusiness {
    constructor(
        private productDatabase: ProductsDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public insertProducts = async (input: IProductDB): Promise<IProductDB> => {
        const { id, name, tags } = input

    
        if (typeof name !== "string") {
            throw new ParamsError("Parâmetro 'name' inválido: deve ser uma string")
        }

        if (typeof tags !== "string") {
            throw new ParamsError("Parâmetro 'tags' inválido: deve ser uma string")
        }

        if (name.length < 3) {
            throw new ParamsError("Parâmetro 'name' inválido: mínimo de 3 caracteres")
        }

        const id = this.idGenerator.generate()

        const product = new Product(
            id,
            name,
            tags
        )

        await this.productDatabase.createProduct(product)

        const response = {
            message: "Produto inserido com sucesso"
        }

        return response
    }
    public getAllProducts = async (req:Request, res:Response) {
        const allProducts = await products()

        if(!allProducts?.length){
            throw new Error("Não há nenhum produto cadastrado")
        }

        res.status(200).send(allProducts)
        
    }; catch (error: any) {
        res.status(500).send({message: error.message}
      
    }
}