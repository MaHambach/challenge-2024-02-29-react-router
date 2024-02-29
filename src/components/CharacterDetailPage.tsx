import { useParams } from "react-router-dom";
import CharacterCard from "./CharacterCard.tsx";
import {Character} from "../types/characters.ts";

type CharacterDetailPageProps = {
    characters: Character[]
}

export default function CharacterDetailPage(props:Readonly<CharacterDetailPageProps>): JSX.Element {
    const params = useParams();
    const id: string | undefined = params.id;
    if(id===undefined) throw new Error("No id provided in url");
    const character:Character = props.characters.filter((character:Character) => character.id === parseInt(id))[0];

    return (
        <CharacterCard character={character} />
    );
}