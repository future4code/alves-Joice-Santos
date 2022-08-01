import React from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../../constants/urls";
import useProtected from "../../hooks/useProtected";

import useRequestData from "../../hooks/useRequestData"
import { goToAddRecipes, goToRecipeDetails } from "../../routes/Coordinator";
import { AddRecipeButton, RecipeListContainer } from "./styled";

const RecipeList = () => {
    const navigate = useNavigate()
    useProtected()
    const recipes = useRequestData([], `${BaseUrl}/recipe/feed`)

    const onClickCard = (id) => {
        goToRecipeDetails(navigate, id)
    }

    const  recipeCards = recipes.map((recipe) => {
        return (
            <RecipeListContainer 
            key={recipe.recipe_id}
            title={recipe.title}
            image={recipe.image}
            onClick={()=> null}
            />
        )
    })
     return (
        <RecipeListContainer>
            {recipeCards}
            <AddRecipeButton 
            color="primary"
            onClick={()=> goToAddRecipes(navigate)}
            />
        </RecipeListContainer>
    )
}

export default RecipeList