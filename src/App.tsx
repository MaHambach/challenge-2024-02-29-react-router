import './App.css'
import {useEffect, useState} from "react";
import {Character} from "./types/characters.ts";
import CharacterGallery from "./components/CharacterGallery.tsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./components/Welcome.tsx";
import Header from "./components/Header.tsx";
import CharacterDetailPage from "./components/CharacterDetailPage.tsx";
import NewCharacterForm from "./components/NewCharacterForm.tsx";
import axios from "axios";

function App() {
    const [characters, setCharacters] = useState<Character[]>([])
    function fetchData() :void{
            axios.get("https://rickandmortyapi.com/api/character")
                .then((response) => {
                    setCharacters(characters.concat(response.data.results));
                })
                .catch((error) => {
                    console.error("Error fetching data: ", error.message);
                });
    }

    useEffect(fetchData, []);

    return (
        <main className={"customMain"}>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Navigate replace to="/Home/Welcome"/>}/>
                <Route path="/Home/Welcome" element={<Welcome/>}/>
                <Route path="/characters" element={<CharacterGallery characters={characters}/>}/>
                <Route path={"/characters/:id"} element={<CharacterDetailPage characters={characters}/>}/>
                <Route path={"/newcharacter"} element={<NewCharacterForm />}/>
            </Routes>
        </main>
    )
}

export default App
