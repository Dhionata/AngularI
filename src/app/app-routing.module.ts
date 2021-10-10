import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {HomeComponent} from './views/home/home.component';
import {ProdutoComponent} from'./views/produto/produto.component';
import { ProdutoCreateComponent } from './components/produto/produto-criar/produto-criar.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';

const routes: Routes = [{

  path: "",
  component: HomeComponent
  },

  {
  path:"produto",
  component: ProdutoComponent
  },

  {
    path:"produto/create",
    component: ProdutoCreateComponent
  },

  {
  path:"produto/update/:id",
  component: ProdutoUpdateComponent
},

{
  path:"produto/delete/:id",
  component: ProdutoDeleteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
