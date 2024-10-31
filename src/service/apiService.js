import axios from "axios"

export const getCharacters = async () => {
    try {
        const response = await axios.get("https://dragonball-api.com/api/characters")
        return response.data.items
    } catch (error) {
        throw new Error(error)
    }
}

export const getDetailsId = async(id) =>{
    try {
        const response = await axios.get(`https://dragonball-api.com/api/characters/${id}`)
        return response.data
    } catch (error) {
        throw new Error (error)
    }
}

export const getPlanet = async() =>{
    try {
        const response = await axios.get(`https://dragonball-api.com/api/planets`)
        return response.data.items

    } catch (error) {
        throw new Error(error)

    }

}

export const getTransformation = async() =>{
    try {
        const response = await axios.get(`https://dragonball-api.com/api/transformations`)
        return response.data
    } catch (error) {
        throw new Error (error)
    }
}

export const getPlanetsDetails = async (id) =>{
    try {
        const response = await axios.get (`https://dragonball-api.com/api/planets/${id}`)
        return response.data
    } catch (error) {
        throw new Error (error)
    }
}

export const getTransformationDetails = async (id) =>{
    try {
        const response = await axios.get (`https://dragonball-api.com/api/transformations/${id}`)
        return response.data

    } catch (error) {
        throw new Error (error)
    }
}
