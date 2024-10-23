import "./cardTransformation.css"

export const CardTransformation = ({data}) =>{
    return(
        <div className="container-all">
            {data.map((item)=>(
                <div className="container-image" key={item.id}>
                    <h2 className="title">{item.name}</h2>
                    <p className="ki">KI: {item.ki}</p>
                    <img className="image" src={item.image} alt="" />
                </div>
            ))}
        </div>
    )
}
