import { useEffect } from "react"
import { useState } from "react"
import { getPlanet } from "../service/apiService"




export const usePlanets = () =>{
    const [ dato, setDato ] = useState(null)
    const [ cargando, setCargando ] = useState(false)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const fechtPlanets = async () => {
            setCargando(true);
            try {
                const data = await getPlanet()
                setDato(data);
                setCargando(false)

            } catch (error) {
                setError(error);
                setCargando(false)
            }
        };
        fechtPlanets()
    }, []);

    return{dato, cargando,error}
}
