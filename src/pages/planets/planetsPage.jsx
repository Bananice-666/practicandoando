import { Planet } from "../../components/custom/cardPlanets/CardPlanets"
import { usePlanets } from "../../hooks/usePlanets"


export const PlanetsPage = ()=>{

    const { dato, error, cargando } = usePlanets()

    if (cargando) return ( <p>cargando</p> )

    if (error) return ( <p>error {error}</p>)

    return(
        <>
            {dato &&
                dato.map((item) => (
                    <Planet
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        image= {item.image}

                    />
                ))
            }
        </>

    )
}
