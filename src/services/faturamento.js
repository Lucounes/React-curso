import {URL_API} from './Base'

export function consultarFaturamento(){
    return fetch (`${URL_API}/Faturamento` ) .then(resultado => resultado.json())
}