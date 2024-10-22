import "./cardCharacter.css"

export const CardCharacters = ({ data }) => {

    return (
        <div className="contend-card-character">
            {data.map((item, index) => (
                <div className="container-character" key={index}>
                    <div className="character">
                        <div className="character-container-img">
                            <img src={item.image} alt={item.name} className="character-img" />
                        </div>
                        <div className="character-info">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
