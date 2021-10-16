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
  component: EnderecoComponent
},

{
  path: "usuario/create",
  component: EnderecoCreateComponent
},

{
  path: "usuario/update/:id",
  component: EnderecoUpdateComponent
},

{
  path: "usuario/delete/:id",
  component: EnderecoDeleteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
