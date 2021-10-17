import { produtoFornecedor } from "../produtoFornecedor/produtoFornecedor.model";

export interface Produto {
  id?: number
  nome: string
  listaFornecedores: Array<produtoFornecedor>,
  disponivel: true
}
