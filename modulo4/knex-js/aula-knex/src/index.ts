import app from "./app"
import { Request, Response } from "express"
import connection from "./connection"
import express from "express"
import cors from "cors"


const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0][0]
}

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    connection.raw(`
    SELECT FROM Actor WHERE id = '${id}'
    `)

    return result[0][0]
    `)

    res.end()
  } catch (error: any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
}) 