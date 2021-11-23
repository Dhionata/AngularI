import { Telefone } from "../telefone/telefone.model";
import { Cliente } from "../cliente/cliente.model";

export interface TelefoneFornecedor extends Telefone {
  id?: number
  cliente: Cliente
}
