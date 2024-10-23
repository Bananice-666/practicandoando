import { Planet } from "../../components/custom/index"
import { usePlanets } from "../../hooks/usePlanets"

export const Planets = ()=>{

    const { dato, error, cargando } = usePlanets()

    if (cargando) return ( <p>cargando</p> )

    if (error) return ( <p>error {error}</p>)

    return(
        <>
            {dato && <Planet data={dato}/>}
        </>

    )
}
