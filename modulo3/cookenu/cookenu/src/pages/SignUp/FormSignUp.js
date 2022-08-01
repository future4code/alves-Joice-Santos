import { Button, TextField } from "@material-ui/core"
import React from "react"
import { DetailsContainer} from "./styled" 
import useForm from "../../hooks/useForm"
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/user";

const FormSignUp = () => {
    const navigate = useNavigate()
    const {form, onChange, clear} = useForm({name:"", email: "", password: ""});

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        signUp(form, clear, navigate)
    };

    return (
        <DetailsContainer>
                <form onSubmit={onSubmitForm}>
                <TextField 
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        fullWidth
                        margin="normal"
                        color="primary"
                        required
                        type={"name"}
                    />
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
                        Criar cadastro
                    </Button>
                </form>
        </DetailsContainer>
    )
};

export default FormSignUp