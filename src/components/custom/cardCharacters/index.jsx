import { Link } from "react-router-dom"
import "./cardCharacter.css"

export const CardCharacters = ({ nombre, image, id, description }) => {

    return (

        <div className="container-character">
            <div className="character">
                <div className="character-container-img">
                    <img src={image} alt={nombre} className="character-img" />
                </div>
                <div className="character-info">
                    <h2>{nombre}</h2>
                    <p>{description}</p>
                    <Link to={`/character/details/${id}`}>
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    )
}
