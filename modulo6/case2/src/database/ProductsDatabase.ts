import { IProductDB, Product } from "../models/Products"
import { BaseDatabase } from "./BaseDatabase"

export class ProductsDatabase extends BaseDatabase {
    public static amaro_products = "Template_Products"

    public toProductDBModel = (product: Product): IProductDB => {
        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName(),
            tags: product.getTags(),
        }

        return productDB
    }

    public findById = async (id: string): Promise<IProductDB | undefined> => {
        const result: IProductDB[] = await BaseDatabase
            .connection(ProductsDatabase.amaro_products)
            .select()
            .where({ id })

        return result[0]
    }

    public createProduct = async (product: Product): Promise<void> => {
        const productDB = this.toProductDBModel(product)

        await BaseDatabase
            .connection(ProductsDatabase.amaro_products)
            .insert(productDB)
    }
}