import { ProdutoFornecedor } from "../produtoFornecedor/produtoFornecedor.model";

export interface Produto {
  id?: number
  nome: string
  listaFornecedores: Array<ProdutoFornecedor>
  disponivel: boolean
}
