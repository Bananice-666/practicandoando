import { CardTransformation } from "../../components/custom/cardTransformation/CardTransformation"
import { useCharacter } from "../../hooks/useCharacter"

export const TransformationPage =()=>{

    const{error, loading, data}= useCharacter()

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
