import { useEffect } from "react"
import { useState } from "react"
import { getPlanet } from "../service/planets"



export const usePlanets = () =>{
    const [ dato, setDato ] = useState(null)
    const [ cargando, setCargando ] = useState(false)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const fetchDetailId = async () => {
            setLoading(true);
            try {
                const data = await setDetailsId(id); // Pasa el ID a la función
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        if (id) {
            fetchDetailId(); // Solo hacer la petición si hay un ID
        }
    }, [id]);

    return{dato,cargando,error}
}
