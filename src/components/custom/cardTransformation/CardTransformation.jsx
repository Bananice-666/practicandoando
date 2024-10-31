import "./CardTransformation.css"

export const CardTransformation = ({ id, name, ki, image }) => {
    return (
        <div className="container-all">

            <div className="container-image" >
                <h2 className="title">{name}</h2>
                <p className="ki">KI: {ki}</p>
                <img className="image" src={image} alt="" />
            </div>

        </div>
    )
}
