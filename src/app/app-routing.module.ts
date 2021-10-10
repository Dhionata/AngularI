import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {HomeComponent} from './views/home/home.component';
import {ProdutoComponent} from'./views/product/produto.component';
import { ProdutoCreateComponent } from './components/product/produto-criar/produto-criar.component';
import { ProdutoUpdateComponent } from './components/product/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/product/produto-delete/produto-delete.component';

const routes: Routes = [{

  path: "",
  component: HomeComponent
  },

  {
  path:"product",
  component: ProdutoComponent
  },

  {
    path:"product/create",
    component: ProdutoCreateComponent
  },

  {
  path:"product/update/:id",
  component: ProdutoUpdateComponent
},

{
  path:"product/delete/:id",
  component: ProdutoDeleteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
