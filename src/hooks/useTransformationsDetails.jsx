import { useState } from "react"
import { getTransformationDetails } from "../service/apiService"
import { useEffect } from "react"


export const useTransformationDetails = (id) =>{
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError]= useState(null)

    useEffect(
        ()=>{
            const fetchTransformationDetails = async() =>{
                setLoading(true)
                try {
                    const data = await getTransformationDetails(id)
                    setData(data)
                    setLoading(false)
                } catch (error) {
                    setError(error)
                    setLoading(false)
                }

            }
            fetchTransformationDetails()

        },[]

    )
    return{data, loading, error}
}
