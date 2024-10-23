import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Planet } from "../../components/custom/index"





export const Planets = ()=>{
    const [ dato, setDato ] = useState(null)
    const [ cargando, setCargando ] = useState(false)
    const [ error, setError ] = useState(null)

    useEffect(
        ()=>{
            const fetchPlanets= async ()=>{
                setCargando(true)

                try {
                    const response = await axios.get(`https://dragonball-api.com/api/planets`)
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
    if (cargando) return ( <p>cargando</p> )
    if (error) return ( <p>error {error}</p>)

    return(
        <>
            {dato && <Planet data={dato}/>}
        </>

    )
}
