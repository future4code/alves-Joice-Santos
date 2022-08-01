import React from "react"
import useProtected from "../../hooks/useProtected"
import { Button } from "@material-ui/core"
import { MainContainer } from "./styled"
import AddForm from "./AddForm"

const AddRecipe = () => {
    useProtected()

    return (
        <MainContainer>
            <AddForm />
            <Button variant="contained" color="primary">Enviar receita</Button>
        </MainContainer>
    )
}

export default AddRecipe