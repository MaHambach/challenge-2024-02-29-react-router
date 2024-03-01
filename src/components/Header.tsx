import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {

    return(
        <header className={"customHeader"}>
            <Link className={"link"} to="/Home/Welcome">Home</Link>
            <Link className={"link"} to="/characters">Charaktere</Link>
            <Link className={"link"} to={"/character"}>Neuer Charakter</Link>
        </header>
    )
}