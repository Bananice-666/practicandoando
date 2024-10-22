import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { CardCharacters } from "../../components/custom/cardCharacters"

export const Characters=()=>{
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const fechtCharacters = async () => {
            setLoading(true)
            try {
                const response = await axios.get("https://dragonball-api.com/api/characters")
                setData(response.data.items)
                setLoading(false)
            }catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fechtCharacters()
    }, [])

    if (loading) return <p>Cargando...</p>

    if (error) return <p>Hubo un error: {error}</p>

    return (
        <>
            {data && <CardCharacters data={data}/>}
        </>
    )
}
