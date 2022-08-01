import React from "react";
import FormSignUp from "../SignUp/FormSignUp"
import { MainContainer, } from "./styled"
import useUnprotected from "../../hooks/useUnprotected"

const SignUp = () => {
    useUnprotected()
    
    return (
        <MainContainer>
            <FormSignUp />
        </MainContainer>
    )
}

export default SignUp