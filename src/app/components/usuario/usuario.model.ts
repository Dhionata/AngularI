import { TipoUsuario } from "../tipoUsuario/tipoUsuario.model";
import { Endereco } from '../endereco/endereco.model';
import { Telefone } from "../telefone/telefone.model";

export interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  cnpjCpf: string;
  enderecos: Array<Endereco>;
  telefone: Array<Telefone>;
  tipoUsuario: TipoUsuario;
}
