import { URL_API} from './Base';

export function consultarResumo(){
    return fetch (`${URL_API}/resumo` ).then(resultado => resultado.json());
}