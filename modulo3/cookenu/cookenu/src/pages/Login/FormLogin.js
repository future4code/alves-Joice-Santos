import { Button, TextField } from "@material-ui/core"
import React from "react"
import { DetailsContainer} from "./styled" 
import useForm from "../../hooks/useForm"
import { login } from "../../services/user"
import { useNavigate } from "react-router-dom"


const FormLogin = () => {
    const {form, onChange, clear} = useForm({email: "", password: ""});
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate)
    };
 
    return (
        <DetailsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField 
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        fullWidth
                        margin="normal"
                        color="primary"
                        required
                        type={"email"}
                    />
                    <TextField 
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        fullWidth
                        margin="normal"
                        required
                        type={"password"}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        margin="normal"
                    >
                        Entrar
                    </Button>
                </form>
        </DetailsContainer>
    )
};

export default FormLogin