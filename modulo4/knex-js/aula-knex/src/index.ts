import app from "./app"
import { Request, Response } from "express"
import connection from "./connection"
import express from "express"
import cors from "cors"


app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    connection.raw(`
    SELECT FROM Actor WHERE id = ()
    `)
                                
    res.end()
  } catch (error: any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
}) 
/*
app.get("/users/:name", async (req: Request, res: Response) => {
  try {
    connection.raw(`
    SELECT FROM Actor WHERE name = '${name}'
    `)
                                
    res.end()
  } catch (error: any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
}) 

app.get("/users/:gender", async (req: Request, res: Response) => {
  try {
    connection.raw(`
    SELECT FROM Actor WHERE gender = '${gender}'
    `)
                                
    res.end()
  } catch (error: any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
}) */