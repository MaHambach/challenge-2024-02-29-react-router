import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {

    return(
        <header className={"customHeader"}>
            <span><Link to="/Home/Welcome">Home</Link></span>
            <span><Link to="/characters">Charaktere</Link></span>
            <span><Link to={"/newcharacter"}>Neuer Charakter</Link></span>
        </header>
    )
}