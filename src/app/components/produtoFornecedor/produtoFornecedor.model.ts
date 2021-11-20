import { Fornecedor } from "../fornecedor/fornecedor.model";

export interface ProdutoFornecedor {
  id?: number,
  produto: String,
  fornecedor: Fornecedor,
  preco: number,
  quantidadeEmEstoque: number,
  dataCadastro: Date,
  dataAtualizacao: Date
}
