export interface Usuario {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  nombreUsuario: string;
  cedulaUsuario:string;
  telefonoUsuario:string;
  direccionUsuario:string;
  password:string;
  idHacienda:string;
  rolesUsuarios?: any

}
