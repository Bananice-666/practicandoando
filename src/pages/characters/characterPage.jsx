import { CardCharacters } from "../../components/custom/cardCharacters"
import { useCharacter } from "../../hooks/useCharacter"

export const CharactersPage=()=>{

    const { data, error, loading} = useCharacter()

    if (loading) return <p>Cargando...</p>

    if (error) return <p>Hubo un error: {error}</p>

    return (
        <div className="contend-card-character">
            {data &&
                data.map((item , index) => (
                    <CardCharacters key={index}
                        nombre={item.name}
                        image={item.image}
                        id={item.id}
                    />
                ))
            }
        </div>
    )
}
