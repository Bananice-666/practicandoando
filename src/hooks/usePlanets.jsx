import { useEffect } from "react"
import { useState } from "react"
import { getPlanet } from "../service/planets"



export const usePlanets = () =>{
    const [ dato, setDato ] = useState(null)
    const [ cargando, setCargando ] = useState(false)
    const [ error, setError ] = useState(null)

    useEffect(
        ()=>{
            const fetchPlanets= async ()=>{
                setCargando(true)

                try {
                    const response = await getPlanet()
                    setDato(response.data.items)
                    setCargando(false)
                } catch (error) {
                    setCargando(false)
                    setError(error)
                }
            }

            fetchPlanets()

        },[]
    )

    return{dato,cargando,error}
}