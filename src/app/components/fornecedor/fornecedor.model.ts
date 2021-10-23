import { produtoFornecedor } from "../produtoFornecedor/produtoFornecedor.model";
import { TelefoneFornecedor } from "../telefoneFornecedor/telefoneFornecedor.model";

export interface Fornecedor {
  id?: number;
  descricao: String;
  endereco: String;
  listaProdutos: Array<produtoFornecedor>
  listaTelefones: Array<TelefoneFornecedor>
}
