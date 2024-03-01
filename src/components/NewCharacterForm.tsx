import {ChangeEvent, FormEvent, useState} from "react";
import { Character } from "../types/characters.ts";
import "./NewCharacterForm.css";

const initialFormData:Character = {
    id: 0,
    image: "",
    name: "",
    status: "",
    species: "",
    type: "",
    location: {
        name: ""
    },
    origin: {
        name: ""
    }
}

type NewCharacterFormProps = {
    handleNewCharacter: (newCharacter:Character) => void;
}
export default function NewCharacterForm(props:Readonly<NewCharacterFormProps>): JSX.Element {
    const [formData, setFormData] = useState<Character>(initialFormData);
    function handleOnSubmit (event:FormEvent<HTMLFormElement>):void {
        event.preventDefault();
        props.handleNewCharacter(formData);
        setFormData(initialFormData);
        console.log("Form submitted");
    }

    // Function to handle changes in the 'email' input field
    function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setFormData({
            ...formData,
            name: value
        });
    }
// Function to handle changes in the 'email' input field
    function handleChangeStatus(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setFormData({
            ...formData,
            status: value
        });
    }
// Function to handle changes in the 'email' input field
    function handleChangeSpecies(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setFormData({
            ...formData,
            species: value
        });
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor={"name"}>Name:</label>
                <input id={"name"} type="text" name="name" value={formData.name} onChange={handleChangeName}/>
            </div>
            <div>
                <label htmlFor={"Status"}>Status:</label>
                <input id={"Status"} type="text" name="Status" value={formData.status} onChange={handleChangeStatus}/>
            </div>
            <div>
                <label htmlFor={"Species"}>Species:</label>
                <input id={"Species"} type="text" name="Species" value={formData.species} onChange={handleChangeSpecies}/>
            </div>
            <button type={"submit"}>Submit</button>
        </form>
    )
}