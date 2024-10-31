import { CardTransformation } from "../../components/custom/cardTransformation/CardTransformation"
import { useTransformation } from "../../hooks/useTransformation"

export const TransformationPage =()=>{

    const{error, loading, data}=useTransformation()

    if(loading) return( <p>cargandoando</p>)
    if(error) return (<p>error {error}</p>)

    return(
        <>
            {data &&
                data.map((item) => (
                    <CardTransformation
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        ki={item.ki}
                        image={item.image}

                    />
                ))
            }
        </>

    )
}
