import "./navbar.css"
export const Navbar =()=>{
    return(
        <nav className="nav">
            <ul className="ul">
                <li className="nombre-link"><a href="/">personajes</a></li>
                <li className="nombre-link"><a href="/planets">planetas</a></li>
                <li className="nombre-link"><a href="/transformation">transformaiones</a></li>
            </ul>
        </nav>

    )
}
