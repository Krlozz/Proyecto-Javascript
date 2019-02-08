import { Usuario } from './usuario';
import { Rol } from './rol';
export interface rolxUsuario {
    id?: number,
    idUsuario: Usuario,
    idRol: Rol
}