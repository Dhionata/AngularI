import { ProdutoFornecedor } from "../produtoFornecedor/produtoFornecedor.model";

export interface Fornecedor {
  id?: number;
  descricao: String;
  endereco: String;
  listaProdutos: Array<ProdutoFornecedor>
}
