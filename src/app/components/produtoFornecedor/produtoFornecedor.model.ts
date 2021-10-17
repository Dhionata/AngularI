import { Produto } from "../produto/produto.model";

export interface produtoFornecedor {
  id?: number
  produto: Produto
  fornecedor: Fornecedor
  preco: number
  quantidadeEmEstoque: number
  dataCadastro: Date
  dataAtualizacao: Date
}
