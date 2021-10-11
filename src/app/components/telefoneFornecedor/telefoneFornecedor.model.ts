import { Telefone } from "../telefone/telefone.model";

export interface TelefoneFornecedor extends Telefone{
  id?: number
  cliente: Cliente
}
