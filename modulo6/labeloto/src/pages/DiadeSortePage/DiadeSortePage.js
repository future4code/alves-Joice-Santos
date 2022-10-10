import React from "react"
import { Button } from "@mui/material"
import { MainContainer } from "./styled"
import { colorDiadeSorte } from "../../constants/colors"

const DiadeSortePage = () => {

    return (
        <MainContainer>
            <Button variant="contained" color= {colorDiadeSorte}>Dia de Sorte</Button>
        </MainContainer>
    )
}

export default DiadeSortePage