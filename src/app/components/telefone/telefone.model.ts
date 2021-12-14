import { Usuario } from "../usuario/usuario.model";

export interface Telefone {
  id?: number
  usuario: Usuario
  numero: string
}
