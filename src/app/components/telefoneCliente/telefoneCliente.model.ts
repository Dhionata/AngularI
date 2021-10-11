import { Telefone } from "../telefone/telefone.model";

export interface TelefoneCliente extends Telefone{
  id?: number
  cliente: Cliente
}
