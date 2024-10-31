import "./cardDetailsId.css"

export const CardDetailId = ({name, image, description, race, id, ki, planet, planetImage}) =>{
    return(
        <div className="all" key={id}>
            <p className="name">{name}</p>

            <div className="container-details-all">


                <div className="container-details-pj">
                    <div className="cont-rk">
                    <p className="race"> {race}</p>
                    <p className="ki"> KI {ki}</p>
                    </div>
                    <div><img className="image" src={image} alt="" /></div>

                </div>
                <div className="container-details-wrld">
                    <p>planet:</p>
                    <p className="planet">{planet}</p>
                    <img className="image-planet" src={planetImage} alt="" />
                </div>
                <div className="div-texto"> <p className="description">{description}</p>
                </div>
            </div>
        </div>
    )
}
