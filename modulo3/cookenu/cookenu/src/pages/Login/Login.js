import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import useUnprotected from "../../hooks/useUnprotected";
import { goToSignUp } from "../../routes/Coordinator";
import FormLogin from "./FormLogin";
import { MainContainer, SignUpContainer } from "./styled";

const Login = () => {
    useUnprotected()
    const navigate = useNavigate()
    return (
        <MainContainer>
            <FormLogin />
            <SignUpContainer>
                <Button
                    onClick={() => goToSignUp(navigate)}
                    type="submit"
                    fullWidth
                    variant="text"
                    color="primary"
                    margin="normal"
                >
                    Cadastrar-se
                </Button>
          </SignUpContainer>
        </MainContainer>
    )
}

export default Login