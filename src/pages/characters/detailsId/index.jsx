
import { CardDetailId } from "../../../components/custom/cardCharacters/cardDetailsId"
import { useDetailsId } from "../../../hooks/useDetailsId"

export const DetailsId = () => {

    const {error,loading,data}=useDetailsId()

    if (loading) return <p>Cargando...</p>

    if (error) return <p>Hubo un error: {error}</p>


    return (
        <>
            {data &&
                <CardDetailId
                    name={data.name}
                    image={data.image}
                    description={data.description}
                    race={data.race}
                    id={data.id}
                    ki={data.maxKi}
                    planet={data.originPlanet.name}
                    planetImage={data.originPlanet.image}
                />
            }
        </>
    )
}
