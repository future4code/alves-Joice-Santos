enum TIPOUSUARIO {
    ADMIN="admin",
    USER="user"
}

type usuarios = {
    name: String,
    email: String,
    role: TIPOUSUARIO
}

const listaUsuarios: usuarios[] = [
	{name: "Rogério", email: "roger@email.com", role: TIPOUSUARIO.USER},
	{name: "Ademir", email: "ademir@email.com", role: TIPOUSUARIO.ADMIN},
	{name: "Aline", email: "aline@email.com", role: TIPOUSUARIO.USER},
	{name: "Jéssica", email: "jessica@email.com", role: TIPOUSUARIO.USER},  
	{name: "Adilson", email: "adilson@email.com", role: TIPOUSUARIO.USER},  
	{name: "Carina", email: "carina@email.com", role: TIPOUSUARIO.ADMIN}      
] 

const listaAdmin = (lista: usuarios): usuarios[] => {
    const usuarioAdmin: usuarios[] = lista.filter((usuario) => {
        return usuario.role === TIPOUSUARIO.ADMIN
    })
    return listaAdmin
}