import axios from "axios"


export const getTransformation = async() =>{
    try {
        const response = await axios.get(`https://dragonball-api.com/api/transformations`)
        return response.data
    } catch (error) {
        throw new Error (error)
    }
}
