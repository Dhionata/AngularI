import { Usuario } from "../usuario/usuario.model";

export class Endereco {
  id?: number
  usuario?: Usuario
  logradouro?: String
  cidade?: String
  bairro?: String
  complemento?: String
  cep?: String
  numero?: String
  coordenadaX?: number
  coordenadaY?: number
}
