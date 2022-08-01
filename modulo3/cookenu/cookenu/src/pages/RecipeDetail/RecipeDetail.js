import { Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../../constants/urls";
import useProtected from "../../hooks/useProtected";
import useRequestData from "../../hooks/useRequestData";
import { RecipeListContainer, RecipePhoto } from "./styled";

const RecipeDetail = () => {
    useProtected()
    const params = useParams()
    const recipe = useRequestData({}, `${BaseUrl}/recipe/${params.id}`)[0];

    return (
        
            
            <RecipeListContainer>
                <RecipePhoto src="recipe.image" />
                <Typography gutterBottom align="center" variant="h5" color="primary">{recipe.title}</Typography>
                <Typography align="center">{recipe.description}</Typography>
            </RecipeListContainer>
    )
}

export default RecipeDetail