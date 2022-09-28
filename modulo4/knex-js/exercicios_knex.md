# Exercicio 1

a) a resposta é o resultado da query.

b)
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
  
      return result
  }

c) const getActorByGender = async (gender: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT * FROM Actor WHERE gender = '${gender}'
    `)
  
      return result
}

# Exercicio 2

a) 