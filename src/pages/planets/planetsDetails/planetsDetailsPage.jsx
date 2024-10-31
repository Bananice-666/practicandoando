import { useParams } from "react-router-dom"
import { usePlanetsDetails } from "../../../hooks/usePlanetsDetails"
import { CardPlanetsDetails } from "../../../components/custom/cardPlanets/cardPlanetsDetails/CardPlanetsDetails"


export const PlanetsDetailsPage = () =>{
    const {id} = useParams()
    const {data, loading, error} = usePlanetsDetails(id)

    if (loading) return (<p>cargando...</p>)
    if (error) return (<p>error {error}</p>)


    return(
        <>
            { data &&
                <CardPlanetsDetails
                    id={data.id}
                    name={data.name}
                    description={data.description}
                    image={data.image}
                    characterId={data.characters.id}
                    characterName={data.characters.name}
                    characterImage={data.characters.image}
                />
            }
        </>
    )
}
