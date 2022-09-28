import axios from "axios"

const baseURL = "https://viacep.com.br/ws"

const getEnderecoCep = async(cep: string, bairro: string): Promise<string> => {
    try {
        const res = await axios.get(`${baseURL}/${cep}/json`);

        const {logradouro, bairro, localidade, uf} = res.data

        const endereco = `${logradouro}, ${bairro ? bairro : bairro} - ${localidade} / ${uf}`
        return endereco

    } catch (error:any) {
        throw new Error();
    }
}

export default getEnderecoCep;