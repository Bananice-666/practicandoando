import { CardTransformation } from "../../components/custom/cardTransformation"
import { useTransformation } from "../../hooks/useTransformation"

export const Transformation=()=>{

    const{error, loading, data}=useTransformation()

    if(loading) return( <p>cargandoando</p>)

    if(error) return (<p>error {error}</p>)

    return(
        <>
            {data && <CardTransformation data={data}/>}
        </>

    )
}
