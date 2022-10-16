import { Router } from 'express'
import { ProductBusiness } from '../business/ProductBusiness'
import { ProductController } from '../controller/ProductController'
import { ProductsDatabase } from '../database/ProductsDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

export const productRouter = Router()

const productController = new ProductController(
    new ProductBusiness(
        new ProductsDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

productRouter.get("/", productController.getAllProducts)
productRouter.post("/product", productController.insertProducts)