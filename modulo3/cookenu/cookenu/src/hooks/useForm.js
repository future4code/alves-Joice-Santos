import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);

    const onChange = (Event) => {
        const {name, value} = Event.target;
        setForm({...form, [name]: value });
    };

    const cleanForm = () => {
        setForm(initialState);
    };

    return {form, onChange, cleanForm };
};

export default useForm;