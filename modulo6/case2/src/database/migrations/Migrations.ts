import { BaseDatabase } from "../BaseDatabase"
import { ProductsDatabase } from "../ProductsDatabase"
import { products } from "./data"


class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS amaro_products;
        
        create table amaro_products(
            id varchar(255) primary key,
            name varchar(255) not null,
            tags varchar(255) not null
            );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(ProductsDatabase.amaro_products)
            .insert(products)
    }
}

const migrations = new Migrations()
migrations.execute()