import axios from "axios"


export const getPlanet = async() =>{
    try {
        const response = await axios.get(`https://dragonball-api.com/api/planets`)
        setDato(response.data.items)
        setCargando(false)
    } catch (error) {
        throw new Error(error)

    }

}
