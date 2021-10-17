import { fornecedor } from "../fornecedor/fornecedor.model";
import { Produto } from "../produto/produto.model";

export interface produtoFornecedor {
  id?: number
  produto: Produto
  fornecedor: fornecedor
  preco: number
  quantidadeEmEstoque: number
  dataCadastro: Date
  dataAtualizacao: Date
}
