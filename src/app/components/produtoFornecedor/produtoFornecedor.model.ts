import { Fornecedor } from "../fornecedor/fornecedor.model";
import { Produto } from "../produto/produto.model";

export class ProdutoFornecedor {
  id?: number
  produto!: Produto
  fornecedor!: Fornecedor
  preco!: number
  quantidadeEmEstoque!: number
  dataCadastro!: Date
  dataAtualizacao!: Date
}
