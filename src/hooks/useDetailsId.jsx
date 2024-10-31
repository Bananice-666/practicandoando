import { useState, useEffect } from "react"
import { getDetailsId } from "../service/apiService"

export const useDetailsId = (id) => {


    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fechtCharacterId = async () => {
            setLoading(true)
            try {
                const res = await getDetailsId(id)
                setData(res)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fechtCharacterId()
    }, [])

    return {data, loading, error}
}
