import { ProdutoFornecedor } from "../produtoFornecedor/produtoFornecedor.model";

export class Produto {
  id?: number
  nome!: string
  listaFornecedores!: Array<ProdutoFornecedor>
  disponivel!: boolean
}
