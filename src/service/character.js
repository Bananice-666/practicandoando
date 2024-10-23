import axios from "axios"

export const getCharacters = async () => {
    try {
        const response = await axios.get("https://dragonball-api.com/api/characters")
        return response.data.items
    } catch (error) {
        throw new Error(error)
    }
}
