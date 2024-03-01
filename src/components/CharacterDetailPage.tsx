import {Params, useParams} from "react-router-dom";
import CharacterCard from "./CharacterCard.tsx";
import {Character} from "../types/characters.ts";

type CharacterDetailPageProps = {
    characters: Character[]
}

export default function CharacterDetailPage(props:Readonly<CharacterDetailPageProps>): JSX.Element {
    const params:Readonly<Params> = useParams();
    const id: string | undefined = params.id;
    if(id===undefined) return (<p>Kein Charakter mit dieser ID gefunden.</p>);

    const character:Character | undefined = props.characters.filter((character:Character):boolean => character.id === parseInt(id))[0];

    return (
        <CharacterCard character={character}  key={character.id}/>
    );
}