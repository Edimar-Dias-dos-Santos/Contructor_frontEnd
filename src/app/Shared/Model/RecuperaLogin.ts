import { Usuario } from './Usuario';

export interface RecuperaLogin {
    idRecuperaLogin: string;
    cpf: string;
    dataNascimento: Date;
    ultimoNome: string;
    idUsuario: string;
}