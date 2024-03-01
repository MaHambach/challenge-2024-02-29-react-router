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
    const [pageCounter, setPageCounter] = useState<number>(1);
    const [maxPages, setMaxPages] = useState<number>(5);
    const [nextPage, setNextPage] = useState<string | null>(null);

    function fetchData() :void{
            axios.get("https://rickandmortyapi.com/api/character")
                .then((response) => {
                    setCharacters(response.data.results);
                    setMaxPages(response.data.info.pages);
                    setNextPage(response.data.info.next);
                })
                .catch((error) => {
                    console.error("Error fetching data: ", error.message);
                });
    }

    function keepFetching(nextPage:string):void{
        axios.get(nextPage)
            .then((response) => {
                setCharacters([...characters, ...response.data.results]);
                /*setCharacters(characters.concat(response.data.results));*/
                setNextPage(response.data.info.next);
            })
    }
    function handlePageChangeClick(change:number):void{
        if(pageCounter + change < 1) setPageCounter(1);
        else if(pageCounter + change > maxPages) setPageCounter(maxPages);
        else setPageCounter(pageCounter + change);
    }


    useEffect(fetchData, []);
    useEffect(() => {
        if(nextPage) keepFetching(nextPage);
    },[nextPage])


    function addNewCharacter(newCharacter:Character):void{
        newCharacter.id = characters.length + 1;
        if(newCharacter.image === "") newCharacter.image = "https://rickandmortyapi.com/api/character/avatar/19.jpeg";
        setCharacters(characters.concat(newCharacter));
    }

    return (
        <main className={"customMain"}>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Navigate replace to="/Home/Welcome"/>}/>
                <Route path="/Home/Welcome" element={<Welcome/>}/>
                <Route path="/characters" element={<CharacterGallery characters={characters} handlePageChangeClick={handlePageChangeClick}/>}/>
                <Route path={"/characters/:id"} element={<CharacterDetailPage characters={characters}/>}/>
                <Route path={"/character"} element={<NewCharacterForm handleNewCharacter={addNewCharacter}/>}/>
            </Routes>
        </main>
    )
}

export default App
