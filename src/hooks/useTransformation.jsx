import { useEffect } from "react"
import { useState } from "react"
import { getTransformation } from "../service/transformation"


export const useTransformation = () =>{
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError ]= useState(null)

    useEffect(
        ()=>{
            const fetchTransformation=async()=>{
                setLoading(true)
                try {
                    const data = await getTransformation()
                    setData(data)
                    setLoading(false)
                } catch (error) {
                    setLoading(false)
                    setError(error)
                }
            }
            fetchTransformation();

        },[]
    )

    return{data, loading, error}
}
