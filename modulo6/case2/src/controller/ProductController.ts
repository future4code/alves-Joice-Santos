import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError";
import { IProductDB } from "../models/Products";
import { IdGenerator } from "../services/IdGenerator"

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) {}

    public getAllProducts = async (req: Request, res: Response) => {
        try {
            const input: IProductDB = {
                id: req.body.id,
                name: req.body.name,
                tags: req.body.tags
            }

            const response = await this.productBusiness.getAllProducts(input)
            res.status(201).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }
    public getProductbyId = async (req: Request, res: Response) => {
        try {
            const input: IProductDB = {
                id: this.IdGenerator.generate(),
                name: req.body.name,
                tags: req.body.tags
            }

            const response = await this.productBusiness.getAllProducts(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao buscar produtos" })
        }
    } 
}