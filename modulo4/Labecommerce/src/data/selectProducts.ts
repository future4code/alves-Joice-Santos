import { productsData } from "../endpoints/types"
import { connection } from "./baseDataBase"


const productstype = (product:any) => {

    const typeProduct:productsData = {
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url
    }

    return typeProduct
}

export default async function selectProducts():Promise<productsData[] | undefined> {

    const result = await connection("labecommerce_products")
    const AllProductsType = result.map((product) =>{
        return productstype(product)
    })

    return AllProductsType
}