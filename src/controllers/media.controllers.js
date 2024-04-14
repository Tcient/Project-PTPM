import axios from "axios"

const getTrending = async (req, res, next) => {
    try {
        const { timeWindow } = req.params
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=d8247c28df203465fbbb5d9bcbaf299c`);
        res.status(200).json(response.data)
    } catch (error) {
        // console.error(error);
        res.status(200).json('error!')
    }

}

export const mediaController = {
    getTrending
}