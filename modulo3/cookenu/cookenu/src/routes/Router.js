import { Error } from "@material-ui/icons";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddRecipe from "../pages/AddRecipes/AddRecipes";
import ErrorPage from "../pages/Error/ErrorPage";
import Login from "../pages/Login/Login";
import RecipeDetail from "../pages/RecipeDetail/RecipeDetail";
import RecipeList from "../pages/RecipesList/RecipesList";
import SignUp from "../pages/SignUp/SignUp";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<RecipeList/>} />
                <Route path="login" element={ <Login/>} />
                <Route path="cadastro" element={<SignUp/>} />   
                <Route path="adicionar-receita" element={<AddRecipe/>} />      
                <Route path="detalhe/:id" element={<RecipeDetail/>} />
                <Route path="*" element={<ErrorPage />} />     
            </Routes>
        </BrowserRouter>
    )
}

export default Router