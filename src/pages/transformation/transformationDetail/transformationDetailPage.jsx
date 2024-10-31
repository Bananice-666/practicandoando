import { useParams } from "react-router-dom"
import { useTransformationDetails } from "../../../hooks/useTransformationsDetails"
import { CardTransformationDetail } from "../../../components/custom/cardTransformation/cardTransformationDetail/CardTransformationDetail"


export const TransformationDetailPage = () =>{
    const {id} = useParams()
    const {data, loading, error} = useTransformationDetails(id)

    if (loading) return (<p>cargando...</p>)
    if (error) return (<p>error {error}</p>)


    return(
        <>
            { data &&
                <CardTransformationDetail
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
