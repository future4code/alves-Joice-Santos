import express, { Request, Response } from "express";
import cors from "cors";
import { type } from "os";

const app = express();

app.use(express.json());
app.use(cors());

//exercicio 1

app.get("/ping", (req: Request, res: Response) => {
    res.send("pong")
}) 

//exercicio 2

type Afazeres = {
    userId: Number,
    id: Number,
    title: String,
    completed: Boolean
}

//exercicio 3

const listaAfazeres: Afazeres[] = [


{
    userId: 12,
    id: 12,
    title: "lavar a louça",
    completed:true
},
{
    userId: 14,
    id: 14,
    title: "consertar a pia",
    completed:false
},
{
    userId: 25,
    id: 25,
    title: "instalar suporte parede",
    completed:false
},
{
    userId:16,
    id: 16,
    title:"pintar a parede",
    completed:true
}
]
listaAfazeres.push();

console.table(listaAfazeres)

//exercicio 4
app.get("/afazeres", (req: Request, res: Response) => {
    console.log("chave do query", req.query.chave)
    if(req.query.chave == "completas"){
        listaAfazeres.filter((tarefa) => {
           res.send(tarefa.completed == true) 
        })
    }else if(req.query.chave == "incompletas") {
        listaAfazeres.filter((tarefa) => {
            res.send(tarefa.completed == false)
        })
    }

})


app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
});