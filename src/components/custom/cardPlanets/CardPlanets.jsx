import { Link } from "react-router-dom"
import "./CardPlanets.css"

export const Planet = ({ id, name, image, description }) => {
    return (
        <div className="contenedor" key={id}>
            <div className="contenedor-imagen">
                <h3 className="nombre">{name}</h3>
                <Link to={`/planets/details/${id}`}>
                    <img src={image} alt={name} className="imagen" />
                </Link>
                <p className="descripcion">{description}</p>
            </div>
        </div>
    )
}
