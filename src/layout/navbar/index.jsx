import { Link } from "react-router-dom"
import "./navbar.css"

export const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="ul">
                <li className="nombre-link"><Link className="link" to={"/"}>personajes</Link></li>
                <li className="nombre-link"><Link className="link" to="/planets">planetas</Link></li>
                <li className="nombre-link"><Link className="link" to="/transformation">transformaiones</Link></li>
            </ul>
        </nav>
    )
}
