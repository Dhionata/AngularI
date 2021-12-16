import { TipoUsuario } from "../tipoUsuario/tipoUsuario.model";
import { Endereco } from '../endereco/endereco.model';
import { Telefone } from "../telefone/telefone.model";
import { Pedido } from "../pedido/pedido.model";

export class Usuario {
  id?: number
  nome?: string
  email?: string
  senha?: string
  cnpjCpf?: string
  pedidos?: Array<Pedido>
  enderecos?: Array<Endereco>
  telefone?: Array<Telefone>
  tipoUsuario?: TipoUsuario
}
