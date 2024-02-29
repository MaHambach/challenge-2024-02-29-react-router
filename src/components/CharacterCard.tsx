import './CharacterCard.css';
import { Character } from '../types/characters.ts';
import {Link} from "react-router-dom";

type CharacterCardProps = {
    character:Character;
}

export default function CharacterCard(props: Readonly<CharacterCardProps>): JSX.Element {
    const character:Character = props.character;

    return (
        <Link to={`/characters/`+character.id}>

        <article className="RickAndMortyCharacterCard">
            <div className={"RickAndMortyCharacterCard_ImageContainer"}>
                <img className={"RickAndMortyCharacterCard_Image"} src={character.image} alt={character.name} />
            </div>
            <div className={"RickAndMortyCharacterCard_Content"}>
                <div className={"section"}>
                    <h2>{character.name}</h2>
                </div>
                <span className={"status"}>
                    {character.status} - {character.species}
                </span>
                <div className={"section"}>
                    <span className={"text-gray"}>Last known location:</span>
                    {
                        character.location ? <span>{character.location.name}</span> : <span>Unknown</span>
                    }
                </div>
                <div className={"section"}>
                    <span className={"text-gray"}>Origin:</span>
                    {
                        character.origin ? <span>{character.origin.name}</span> : <span>Unknown</span>
                    }
                </div>
            </div>
        </article>
        </Link>
    );
}

