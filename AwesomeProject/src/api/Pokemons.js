import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2';

export const getAllPokemons = async () => {
    return axios.get(`${baseUrl}/pokemon?limit=151`).then((response) => {
        return response.data.results
    });
}