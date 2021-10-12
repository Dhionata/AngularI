import { Telefone } from "../telefone/telefone.model";
import { cliente } from "../cliente/cliente.model";

export interface TelefoneCliente extends Telefone {
  id?: number
  cliente: cliente
}
