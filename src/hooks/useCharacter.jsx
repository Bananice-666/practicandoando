import { useEffect } from "react"
import { useState } from "react"
import { getCharacters } from "../service/apiService"

export const useCharacter = () => {

    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const fechtCharacters = async () => {
            setLoading(true)
            try {
                const data = await getCharacters()
                setData(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fechtCharacters()
    }, [])

    return { data, loading, error }
}
