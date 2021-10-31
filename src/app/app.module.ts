import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MapaComponent } from './components/mapa/mapa';
import { AgmCoreModule } from '@agm/core';


import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/produto/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
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

import { FornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
import { FornecedorDeleteComponent } from './components/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { FornecedorlerComponent } from './components/fornecedor/fornecedor-ler/fornecedor-ler.component';
import { FornecedorComponent } from './views/fornecedor/fornecedor.component';
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-criar/fornecedor-criar.component';

import { produtoFornecedorUpdateComponent } from './components/produtoFornecedor/produtoFornecedor-update/produtoFornecedor-update.component';
import { produtoFornecedorDeleteComponent } from './components/produtoFornecedor/produtoFornecedor-delete/produtoFornecedor-delete.component';
import { produtoFornecedorlerComponent } from './components/produtoFornecedor/produtoFornecedor-ler/produtoFornecedor-ler.component';
import { ProdutoFornecedorComponent } from './views/produtoFornecedor/produtoFornecedor.component';
import { produtoFornecedorCreateComponent } from './components/produtoFornecedor/produtoFornecedor-criar/produtoFornecedor-criar.component';

import { AvaliacaoUpdateComponent } from './components/avaliacao/avaliacao-update/avaliacao-update.component';
import { AvaliacaoDeleteComponent } from './components/avaliacao/avaliacao-delete/avaliacao-delete.component';
import { AvaliacaolerComponent } from './components/avaliacao/avaliacao-ler/avaliacao-ler.component';
import { AvaliacaoComponent } from './views/avaliacao/avaliacao.component';
import { AvaliacaoCreateComponent } from './components/avaliacao/avaliacao-criar/avaliacao-criar.component';

import { EnderecoClienteUpdateComponent } from './components/enderecoCliente/enderecoCliente-update/enderecoCliente-update.component';
import { EnderecoClienteDeleteComponent } from './components/enderecoCliente/enderecoCliente-delete/enderecoCliente-delete.component';
import { EnderecoClientelerComponent } from './components/enderecoCliente/enderecoCliente-ler/enderecoCliente-ler.component';
import { EnderecoClienteComponent } from './views/enderecoCliente/enderecoCliente.component';
import { EnderecoClienteCreateComponent } from './components/enderecoCliente/enderecoCliente-criar/enderecoCliente-criar.component';

import { EnderecoFornecedorUpdateComponent } from './components/enderecoFornecedor/enderecoFornecedor-update/enderecoFornecedor-update.component';
import { EnderecoFornecedorDeleteComponent } from './components/enderecoFornecedor/enderecoFornecedor-delete/enderecoFornecedor-delete.component';
import { EnderecoFornecedorlerComponent } from './components/enderecoFornecedor/enderecoFornecedor-ler/enderecoFornecedor-ler.component';
import { EnderecoFornecedorComponent } from './views/enderecoFornecedor/enderecoFornecedor.component';
import { EnderecoFornecedorCriarComponent } from './components/enderecoFornecedor/enderecoFornecedor-criar/enderecoFornecedor-criar.component';

import { pedidoUpdateComponent } from './components/pedido/pedido-update/pedido-update.component';
import { pedidoDeleteComponent } from './components/pedido/pedido-delete/pedido-delete.component';
import { pedidoLerComponent } from './components/pedido/pedido-ler/pedido-ler.component';
import { pedidoComponent } from './views/pedido/pedido.component';
import { pedidoCreateComponent } from './components/pedido/pedido-criar/pedido-criar.component';
import { FormaPagamentoComponent } from './components/formaPagamento/formaPagamento.component';



registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
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
    UsuarioDeleteComponent,
    FornecedorComponent,
    FornecedorCreateComponent,
    FornecedorlerComponent,
    FornecedorUpdateComponent,
    FornecedorDeleteComponent,
    produtoFornecedorCreateComponent,
    produtoFornecedorlerComponent,
    produtoFornecedorUpdateComponent,
    produtoFornecedorDeleteComponent,
    ProdutoFornecedorComponent,
    AvaliacaoCreateComponent,
    AvaliacaolerComponent,
    AvaliacaoUpdateComponent,
    AvaliacaoDeleteComponent,
    AvaliacaoComponent,
    EnderecoClienteCreateComponent,
    EnderecoClientelerComponent,
    EnderecoClienteUpdateComponent,
    EnderecoClienteDeleteComponent,
    EnderecoClienteComponent,
    EnderecoFornecedorCriarComponent,
    EnderecoFornecedorlerComponent,
    EnderecoFornecedorUpdateComponent,
    EnderecoFornecedorDeleteComponent,
    EnderecoFornecedorComponent,
    pedidoUpdateComponent,
    pedidoDeleteComponent,
    pedidoLerComponent,
    pedidoComponent,
    pedidoCreateComponent,
    FormaPagamentoComponent,
    LoginComponent,
    MapaComponent

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
    MatGridListModule,
    MatBottomSheetModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJ139gBZ0VDjqaUs1QLGCxzTueUzDieF8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})


export class AppModule { }
