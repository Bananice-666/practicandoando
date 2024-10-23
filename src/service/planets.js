import axios from "axios"


export const getPlanet = async() =>{
    try {
        const response = await axios.get(`https://dragonball-api.com/api/planets`)
        return response.data.items

    } catch (error) {
        throw new Error(error)

    }

}
