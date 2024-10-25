import axios from "axios"

export const setDetailsId = async(id) =>{
    try {
        const response = await axios.get(`https://dragonball-api.com/api/characters/${id}`)
        return response.data
    } catch (error) {
        throw new Error (error)
    }
}
