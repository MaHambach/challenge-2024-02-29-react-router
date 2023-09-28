import {Character} from "./characters.ts";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {

    return (
        <div>
            <p>
                {props.character.name}
            </p>
            <p>
                {props.character.species}
            </p>
        </div>
    )
}
