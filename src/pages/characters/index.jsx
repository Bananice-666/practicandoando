import { CardCharacters } from "../../components/custom/cardCharacters"
import { useCharacter } from "../../hooks/useCharacter"

export const Characters=()=>{

    const { data, error, loading} = useCharacter()

    if (loading) return <p>Cargando...</p>

    if (error) return <p>Hubo un error: {error}</p>

    return (
        <>
            {data && <CardCharacters data={data}/>}
        </>
    )
}
