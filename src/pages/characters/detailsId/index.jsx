import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { CardCharacters } from "../../../components/custom/cardCharacters"

export const DetailsId = () => {

    const params = useParams()

    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fechtCharacterId = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`https://dragonball-api.com/api/characters/${params.id}`)
                setCharacter(res.data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fechtCharacterId()
    }, [])

    if (loading) return <p>Cargando...</p>

    if (error) return <p>Hubo un error: {error}</p>

    console.log(character)

    return (
        <>
            {character &&
                <div>
                    <CardCharacters
                        nombre={character.name}
                        image={character.image}
                        description={character.description}
                        id={character.id}
                    />
                </div>
            }
        </>
    )
}
