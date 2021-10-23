import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
import { produtoFornecedorCreateComponent } from './components/produtoFornecedor/produtoFornecedor-criar/produtoFornecedor-criar.component';
import { produtoFornecedorDeleteComponent } from './components/produtoFornecedor/produtoFornecedor-delete/produtoFornecedor-delete.component';
import { produtoFornecedorUpdateComponent } from './components/produtoFornecedor/produtoFornecedor-update/produtoFornecedor-update.component';

import { AvaliacaoComponent } from './views/avaliacao/avaliacao.component';
import { AvaliacaoCreateComponent } from './components/avaliacao/avaliacao-criar/avaliacao-criar.component';
import { AvaliacaoDeleteComponent } from './components/avaliacao/avaliacao-delete/avaliacao-delete.component';
import { AvaliacaoUpdateComponent } from './components/avaliacao/avaliacao-update/avaliacao-update.component';

import { EnderecoClienteComponent } from './views/enderecoCliente/enderecoCliente.component';
import { EnderecoClienteCreateComponent } from './components/enderecoCliente/enderecoCliente-criar/enderecoCliente-criar.component';
import { EnderecoClienteDeleteComponent } from './components/enderecoCliente/enderecoCliente-delete/enderecoCliente-delete.component';
import { EnderecoClienteUpdateComponent } from './components/enderecoCliente/enderecoCliente-update/enderecoCliente-update.component';

import { EnderecoFornecedorComponent } from './views/enderecoFornecedor/enderecoFornecedor.component';
import { EnderecoFornecedorCriarComponent } from './components/enderecoFornecedor/enderecoFornecedor-criar/enderecoFornecedor-criar.component';
import { EnderecoFornecedorDeleteComponent } from './components/enderecoFornecedor/enderecoFornecedor-delete/enderecoFornecedor-delete.component';
import { EnderecoFornecedorUpdateComponent } from './components/enderecoFornecedor/enderecoFornecedor-update/enderecoFornecedor-update.component';

import { pedidoUpdateComponent } from './components/pedido/pedido-update/pedido-update.component';
import { pedidoDeleteComponent } from './components/pedido/pedido-delete/pedido-delete.component';
import { pedidoComponent } from './views/pedido/pedido.component';
import { pedidoCreateComponent } from './components/pedido/pedido-criar/pedido-criar.component';


const routes: Routes = [{

  path: "",
  component: HomeComponent
},

{
  path: "produto",
  component: ProdutoComponent
},

{
  path: "produto/create",
  component: ProdutoCreateComponent
},

{
  path: "produto/update/:id",
  component: ProdutoUpdateComponent
},

{
  path: "produto/delete/:id",
  component: ProdutoDeleteComponent
},

{
  path: "cliente",
  component: ClienteComponent
},

{
  path: "cliente/create",
  component: ClienteCreateComponent
},

{
  path: "cliente/update/:id",
  component: ClienteUpdateComponent
},

{
  path: "cliente/delete/:id",
  component: ClienteDeleteComponent
},

{
  path: "endereco",
  component: EnderecoComponent
},

{
  path: "endereco/create",
  component: EnderecoCreateComponent
},

{
  path: "endereco/update/:id",
  component: EnderecoUpdateComponent
},

{
  path: "endereco/delete/:id",
  component: EnderecoDeleteComponent
},

{
  path: "usuario",
  component: UsuarioComponent
},

{
  path: "usuario/create",
  component: UsuarioCreateComponent
},

{
  path: "usuario/update/:id",
  component: UsuarioUpdateComponent
},

{
  path: "usuario/delete/:id",
  component: UsuarioDeleteComponent
},

{
  path: "fornecedor",
  component: FornecedorComponent
},

{
  path: "fornecedor/create",
  component: FornecedorCreateComponent
},

{
  path: "fornecedor/update/:id",
  component: FornecedorUpdateComponent
},

{
  path: "fornecedor/delete/:id",
  component: FornecedorDeleteComponent
},

{
path: "produtoFornecedor",
  component: ProdutoFornecedorComponent
},

{
  path: "produtoFornecedor/create",
  component: produtoFornecedorCreateComponent
},

{
  path: "produtoFornecedor/update/:id",
  component: produtoFornecedorUpdateComponent
},

{
  path: "produtoFornecedor/delete/:id",
  component: produtoFornecedorDeleteComponent
},
{
  path: "avaliacao",
    component: AvaliacaoComponent
  },

  {
    path: "avaliacao/create",
    component: AvaliacaoCreateComponent
  },

  {
    path: "avaliacao/update/:id",
    component: AvaliacaoUpdateComponent
  },

  {
    path: "avaliacao/delete/:id",
    component: AvaliacaoDeleteComponent
  },

  {
    path: "enderecoCliente",
      component: EnderecoClienteComponent
    },

    {
      path: "enderecoCliente/create",
      component: EnderecoClienteCreateComponent
    },

    {
      path: "enderecoCliente/update/:id",
      component: EnderecoClienteUpdateComponent
    },

    {
      path: "enderecoCliente/delete/:id",
      component: EnderecoClienteDeleteComponent
    },

    {
      path: "enderecoFornecedor",
        component: EnderecoFornecedorComponent
      },

      {
        path: "enderecoFornecedor/create",
        component: EnderecoFornecedorCriarComponent
      },

      {
        path: "enderecoFornecedor/update/:id",
        component: EnderecoFornecedorUpdateComponent
      },

      {
        path: "enderecoFornecedor/delete/:id",
        component: EnderecoFornecedorDeleteComponent
      },

      {
        path: "pedido",
          component: pedidoComponent
        },

        {
          path: "pedido/create",
          component: pedidoCreateComponent
        },

        {
          path: "pedido/update/:id",
          component: pedidoUpdateComponent
        },

        {
          path: "pedido/delete/:id",
          component: pedidoDeleteComponent
        }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
