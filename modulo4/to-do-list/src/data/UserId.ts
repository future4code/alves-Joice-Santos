import connection from "../connection";

export default async function userId(id:string) {
    const result = await connection('TodoListUser')
        .select('*')
        .where({id})

    return result[0]    
}