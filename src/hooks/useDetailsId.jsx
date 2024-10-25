import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { setDetailsId } from "../service/detailsId"

export const useDetailsId = () => {

    const params = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fechtCharacterId = async () => {
            setLoading(true)
            try {
                const res = await setDetailsId(params.id)
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
