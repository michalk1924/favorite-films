import axios from "axios";

const http = axios.create({
    baseURL: 'https://swapi.py4e.com/api',
    headers: {
        'Content-Type': 'application/json',
    },

});

async function getAllFilms() {
    try {
        const response = await http.get('/films');
        const result = response.data.results;
        console.log(result);
        return result;
    }
    catch (error) {
        console.error(error);
    }
}

export default getAllFilms
