import {URL_API} from './Base'

export function listarConsultas(){
    return fetch (`${URL_API}/consultas` ) .then(resultado => resultado.json())
}