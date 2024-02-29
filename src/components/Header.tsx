import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {

    return(
        <header className={"customHeader"}>
            <Link to="/Home/Welcome">Home</Link>
            <Link to="/characters">Charaktere</Link>
        </header>
    )
}