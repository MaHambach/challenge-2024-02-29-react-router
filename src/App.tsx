import './App.css'
import {useState} from "react";
import {Character, charactersResponse} from "./types/characters.ts";
import CharacterGallery from "./components/CharacterGallery.tsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./components/Welcome.tsx";
import Header from "./components/Header.tsx";
import CharacterDetailPage from "./components/CharacterDetailPage.tsx";

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    return (
        <main className={"customMain"}>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Navigate replace to="/Home/Welcome"/>}/>
                <Route path="/Home/Welcome" element={<Welcome/>}/>
                <Route path="/characters" element={<CharacterGallery characters={characters}/>}/>
                <Route path={"/characters/:id"} element={<CharacterDetailPage characters={characters}/>}/>
            </Routes>
        </main>
    )

    function getCharacterById(id:number):Character {
        return characters.filter((character:Character) => character.id === id)[0];
    }
}

export default App
