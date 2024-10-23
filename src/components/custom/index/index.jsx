import "./index.css"

export const Planet = ({data}) =>{
    return(

        <div className="contenedor">
            {data.map((item)=>(
                <div className="contenedor-imagen" key={item.id}>
                    <h3 className="nombre">{item.name}</h3>
                    <img src={item.image} alt={item.name} className="imagen"/>
                    <p className="descripcion">{item.description}</p>
                </div>
            ))}
        </div>

    )
}
