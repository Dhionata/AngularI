import { TipoUsuario } from "../tipoUsuario/tipoUsuario.model";

export interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  cnpjCpf: string;
  tipoUsuario: TipoUsuario;
}
