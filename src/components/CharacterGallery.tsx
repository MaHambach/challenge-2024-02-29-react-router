import {Character} from "../types/characters.ts";
import CharacterCard from "./CharacterCard.tsx";
import './CharacterGallery.css';
import SearchComponent from "./SarchComponent.tsx";
import {useState} from "react";

type CharacterGalleryProps = {
    characters: Character[],
    handlePageChangeClick: (change:number) => void
}

export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {
    const [filter, setFilter] = useState<string>("");

    return (
        <div>
            <h2>Gallery</h2>
            <SearchComponent handleSearchText={setFilter} />
            <div className={"characterGallery_mainDiv"}>
                {props.characters
                    .filter((character: Character) => character.name.toLowerCase().includes(filter.toLowerCase()))
                    .map((character:Character) => <CharacterCard character={character} key={character.id}/>)}
            </div>
        </div>
    )
}
