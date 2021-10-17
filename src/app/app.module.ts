import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';
import { MatIconModule } from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/produto/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule} from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { ItemPedidoUpdateComponent } from './components/itemPedido/itemPedido-update/itemPedido-update.component';
import { ItemPedidoDeleteComponent } from './components/itemPedido/itemPedido-delete/itemPedido-delete.component';
import { ItemPedidolerComponent } from './components/itemPedido/itemPedido-ler/itemPedido-ler.component';
import { ItemPedidoComponent } from './views/itemPedido/itemPedido.component';
import { ItemPedidoCreateComponent } from './components/itemPedido/itemPedido-criar/itemPedido-criar.component';

import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClientelerComponent } from './components/cliente/cliente-ler/cliente-ler.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { ClienteCreateComponent } from './components/cliente/cliente-criar/cliente-criar.component';

import { EnderecoUpdateComponent } from './components/endereco/endereco-update/endereco-update.component';
import { EnderecoDeleteComponent } from './components/endereco/endereco-delete/endereco-delete.component';
import { EnderecolerComponent } from './components/endereco/endereco-ler/endereco-ler.component';
import { EnderecoComponent } from './views/endereco/endereco.component';
import { EnderecoCreateComponent } from './components/endereco/endereco-criar/endereco-criar.component';

import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';
import { ProdutolerComponent } from './components/produto/produto-ler/produto-ler.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { ProdutoCreateComponent } from './components/produto/produto-criar/produto-criar.component';

import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { UsuariolerComponent } from './components/usuario/usuario-ler/usuario-ler.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-criar/usuario-criar.component';


registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutoComponent,
    ProdutoCreateComponent,
    ProdutolerComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent,
    ClienteComponent,
    ClienteCreateComponent,
    ClientelerComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    ItemPedidoComponent,
    ItemPedidoCreateComponent,
    ItemPedidolerComponent,
    ItemPedidoUpdateComponent,
    ItemPedidoDeleteComponent,
    EnderecoComponent,
    EnderecoCreateComponent,
    EnderecolerComponent,
    EnderecoUpdateComponent,
    EnderecoDeleteComponent,
    UsuarioComponent,
    UsuarioCreateComponent,
    UsuariolerComponent,
    UsuarioUpdateComponent,
    UsuarioDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
