import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//imports componentes
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';


//angular material
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutosComponent } from './cadastro/produtos/produtos.component';
import { IncluirComponent } from './cadastro/produtos/incluir/incluir.component';
import { EditarComponent } from './cadastro/produtos/editar/editar.component';
import { ExcluirComponent } from './cadastro/produtos/excluir/excluir.component';

@NgModule({
  imports: [
    //angular material imports
    MatCardModule,
    MatTableModule,

    //routes
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'about', component: AboutComponent },
      {
        path: 'cadastro', component: CadastroComponent,
        children: [
          { path: "produtos", component: ProdutosComponent },
          { path: "produtos/incluir", component: IncluirComponent },
          { path: "produtos/editar", component: EditarComponent },
          { path: "produtos/excluir", component: ExcluirComponent }
        ]
      },
    ]),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    FooterComponent,
    AboutComponent,
    CadastroComponent,

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
