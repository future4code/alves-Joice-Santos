import React from "react"
import { TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { DetailsContainer } from "./styled"
import {addRecipe} from "../../services/recipe"


export const AddForm = () => {
    const {form, onChange, clear} = useForm({title:"", description: "", image: ""});

    const onSubmitForm = (event) => {
        event.preventDefault()
        addRecipe(form, clear) 
    };

    return (
     <DetailsContainer>
            <form onSubmit={onSubmitForm}>
            <TextField 
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    label={"Título"}
                    fullWidth
                    margin="normal"
                    color="primary"
                    required  
                />
                <TextField 
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    label={"Descrição"}
                    fullWidth
                    margin="normal"
                    color="primary"
                    required
                    
                />
                <TextField 
                    name={"image"}
                    value={form.image}
                    onChange={onChange}
                    label={"Foto"}
                    fullWidth
                    margin="normal"
                    required
                    
                />
            </form>
        </DetailsContainer>
    )
};
