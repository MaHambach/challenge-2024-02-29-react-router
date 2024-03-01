import {ChangeEvent, FormEvent, useState} from "react";
import {CharacterDTO} from "../types/characterDTO.ts";
import "./NewCharacterForm.css";

const initialFormData:CharacterDTO = {
    name: "",
    status: "",
    species: ""
}
export default function NewCharacterForm(): JSX.Element {
    const [formData, setFormData] = useState<CharacterDTO>(initialFormData);
    const [submittedFormData, setSubmittedFormData] = useState<CharacterDTO[]>([]);
    function handleOnSubmit (event:FormEvent<HTMLFormElement>):void {
        event.preventDefault();
        setSubmittedFormData([...submittedFormData, formData]);
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
        <>
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
            <ul className={"newCharacterForm_ul"}>
                {submittedFormData.map((data) => {
                  return <li key={data.name}>
                      <h2>Name: {data.name}</h2>
                      <h3>Status: {data.status}</h3>
                      <p>Species: {data.species}</p>
                    </li>
                })}
            </ul>
        </>
    )
}