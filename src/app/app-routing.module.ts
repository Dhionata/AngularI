import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { ProdutoCreateComponent } from './components/produto/produto-criar/produto-criar.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';

import { ClienteComponent } from './views/cliente/cliente.component';
import { ClienteCreateComponent } from './components/cliente/cliente-criar/cliente-criar.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';

import { EnderecoComponent } from './views/endereco/endereco.component';
import { EnderecoCreateComponent } from './components/endereco/endereco-criar/endereco-criar.component';
import { EnderecoDeleteComponent } from './components/endereco/endereco-delete/endereco-delete.component';
import { EnderecoUpdateComponent } from './components/endereco/endereco-update/endereco-update.component';

import { UsuarioComponent } from './views/usuario/usuario.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-criar/usuario-criar.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';

import { FornecedorComponent } from './views/fornecedor/fornecedor.component';
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-criar/fornecedor-criar.component';
import { FornecedorDeleteComponent } from './components/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { FornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';

import { ProdutoFornecedorComponent } from './views/produtoFornecedor/produtoFornecedor.component';
import { ProdutoFornecedorCreateComponent } from './components/produtoFornecedor/produtoFornecedor-criar/produtoFornecedor-criar.component';
import { ProdutoFornecedorDeleteComponent } from './components/produtoFornecedor/produtoFornecedor-delete/produtoFornecedor-delete.component';
import { ProdutoFornecedorUpdateComponent } from './components/produtoFornecedor/produtoFornecedor-update/produtoFornecedor-update.component';

import { AvaliacaoComponent } from './views/avaliacao/avaliacao.component';
import { AvaliacaoCreateComponent } from './components/avaliacao/avaliacao-criar/avaliacao-criar.component';
import { AvaliacaoDeleteComponent } from './components/avaliacao/avaliacao-delete/avaliacao-delete.component';
import { AvaliacaoUpdateComponent } from './components/avaliacao/avaliacao-update/avaliacao-update.component';

import { PedidoUpdateComponent } from './components/pedido/pedido-update/pedido-update.component';
import { PedidoDeleteComponent } from './components/pedido/pedido-delete/pedido-delete.component';
import { PedidoComponent } from './views/pedido/pedido.component';
import { PedidoCreateComponent } from './components/pedido/pedido-criar/pedido-criar.component';
import { MapaComponent } from './components/mapa/mapa';

import { ItemPedidoComponent } from './views/itemPedido/itemPedido.component';
import { ItemPedidoCreateComponent } from './components/itemPedido/itemPedido-criar/itemPedido-criar.component';
import { ItemPedidoUpdateComponent } from './components/itemPedido/itemPedido-update/itemPedido-update.component';
import { ItemPedidoDeleteComponent } from './components/itemPedido/itemPedido-delete/itemPedido-delete.component';

import { TelefoneCreateComponent } from './components/telefone/telefone-criar/telefone-criar.component';
import { TelefoneComponent } from './views/telefone/telefone.component';
import { TelefoneUpdateComponent } from './components/telefone/telefone-update/telefone-update.component';
import { TelefoneDeleteComponent } from './components/telefone/telefone-delete/telefone-delete.component';
import { LoginComponent } from './components/login/login.component';
/* import { AuthGuard } from './components/login/shared/auth.guard'; */
/* import { AuthenticationComponent } from './views/authentication/authentication.component'; */
import { Usuario } from './components/usuario/usuario.model';
import { TipoUsuario } from './components/tipoUsuario/tipoUsuario.model';
import { AuthGuard } from './components/guards/auth-guard.service';
import { fornecedorGuard } from './components/guards/fornecedorGuard';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'produto', component: ProdutoComponent, canActivate: [AuthGuard], canActivateChild: [fornecedorGuard] },

  { path: 'produto/create', component: ProdutoCreateComponent, canActivate: [AuthGuard] },

  { path: 'produto/update/:id', component: ProdutoUpdateComponent, canActivate: [AuthGuard] },

  { path: 'produto/delete/:id', component: ProdutoDeleteComponent, canActivate: [AuthGuard] },

  { path: 'cliente', component: ClienteComponent, canActivate: [AuthGuard] },

  { path: 'cliente/create', component: ClienteCreateComponent },

  { path: 'cliente/update/:id', component: ClienteUpdateComponent, canActivate: [AuthGuard] },

  { path: 'cliente/delete/:id', component: ClienteDeleteComponent, canActivate: [AuthGuard] },

  { path: 'endereco', component: EnderecoComponent, canActivate: [AuthGuard] },

  { path: 'endereco/create', component: EnderecoCreateComponent, canActivate: [AuthGuard] },

  { path: 'endereco/update/:id', component: EnderecoUpdateComponent, canActivate: [AuthGuard] },

  { path: 'endereco/delete/:id', component: EnderecoDeleteComponent, canActivate: [AuthGuard] },

  { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard] },

  { path: 'usuario/create', component: UsuarioCreateComponent },

  { path: 'usuario/update/:id', component: UsuarioUpdateComponent, canActivate: [AuthGuard] },

  { path: 'usuario/delete/:id', component: UsuarioDeleteComponent, canActivate: [AuthGuard] },

  { path: 'fornecedor', component: FornecedorComponent, canActivate: [AuthGuard] },

  { path: 'fornecedor/create', component: FornecedorCreateComponent },

  { path: 'fornecedor/update/:id', component: FornecedorUpdateComponent, canActivate: [AuthGuard] },

  { path: 'fornecedor/delete/:id', component: FornecedorDeleteComponent, canActivate: [AuthGuard] },

  { path: 'produtoFornecedor', component: ProdutoFornecedorComponent, canActivate: [AuthGuard] },

  { path: 'produtoFornecedor/create', component: ProdutoFornecedorCreateComponent, canActivate: [AuthGuard] },

  { path: 'produtoFornecedor/update/:id', component: ProdutoFornecedorUpdateComponent, canActivate: [AuthGuard] },

  { path: 'produtoFornecedor/delete/:id', component: ProdutoFornecedorDeleteComponent, canActivate: [AuthGuard] },

  { path: 'avaliacao', component: AvaliacaoComponent, canActivate: [AuthGuard] },

  { path: 'avaliacao/create', component: AvaliacaoCreateComponent, canActivate: [AuthGuard] },

  { path: 'avaliacao/update/:id', component: AvaliacaoUpdateComponent, canActivate: [AuthGuard] },

  { path: 'avaliacao/delete/:id', component: AvaliacaoDeleteComponent, canActivate: [AuthGuard] },

  { path: 'pedido', component: PedidoComponent, canActivate: [AuthGuard] },

  { path: 'pedido/create', component: PedidoCreateComponent, canActivate: [AuthGuard] },

  { path: 'pedido/update/:id', component: PedidoUpdateComponent, canActivate: [AuthGuard] },

  { path: 'pedido/delete/:id', component: PedidoDeleteComponent, canActivate: [AuthGuard] },

  { path: 'itemPedido', component: ItemPedidoComponent, canActivate: [AuthGuard] },

  { path: 'itemPedido/create', component: ItemPedidoCreateComponent, canActivate: [AuthGuard] },

  { path: 'itemPedido/update/:id', component: ItemPedidoUpdateComponent, canActivate: [AuthGuard] },

  { path: 'itemPedido/delete/:id', component: ItemPedidoDeleteComponent, canActivate: [AuthGuard] },

  { path: 'telefone', component: TelefoneComponent, canActivate: [AuthGuard] },

  { path: 'telefone/create', component: TelefoneCreateComponent, canActivate: [AuthGuard] },

  { path: 'telefone/update/:id', component: TelefoneUpdateComponent, canActivate: [AuthGuard] },

  { path: 'telefone/delete/:id', component: TelefoneDeleteComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },

  { path: 'mapa', component: MapaComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
