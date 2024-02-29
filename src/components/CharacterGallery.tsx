import {Character} from "../types/characters.ts";
import CharacterCard from "./CharacterCard.tsx";

type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {

    return (
        <div>
            <p>
                Gallery
            </p>
            {props.characters.map((character:Character) => <CharacterCard character={character} key={character.id}/>)}
        </div>
    )
}
