import express, { Express } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import dotenv from "dotenv"
import createUSer from "./user"
import getUSerId from "./getUserId"
import editUser from "./editUser"

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())

app.put('/user', createUSer)
app.get('/user/:id', getUSerId)
app.post('/user/edit/:id', editUser)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server`)
    }
})