import { useEffect } from "react"
import { useState } from "react"
import { getPlanetsDetails } from "../service/apiService"


export const usePlanetsDetails = (id) =>{
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError]= useState(null)

    useEffect(
        ()=>{
            const fetchPlanetsDetails = async() =>{
                setLoading(true)
                try {
                    const data = await getPlanetsDetails(id)
                    setData(data)
                    setLoading(false)
                } catch (error) {
                    setError(error)
                    setLoading(false)
                }

            }
            fetchPlanetsDetails()

        },[]

    )
    return{data, loading, error}
}
