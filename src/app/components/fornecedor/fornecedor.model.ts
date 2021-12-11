import { ProdutoFornecedor } from "../produtoFornecedor/produtoFornecedor.model";
import { Usuario } from "../usuario/usuario.model";

export interface Fornecedor extends Usuario {
  descricao: String;
  listaProdutos: Array<ProdutoFornecedor>
}