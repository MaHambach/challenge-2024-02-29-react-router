import {ChangeEvent } from "react";

type SearchComponentProps = {
    handleSearchText: (searchText: string) => void,
}

export default function SearchComponent(props: Readonly<SearchComponentProps>):JSX.Element {

    function handleInputChange(event: ChangeEvent<HTMLInputElement>):void {
        props.handleSearchText(event.target.value);
    }

    return (
        <input onChange={handleInputChange}/>
    );
}