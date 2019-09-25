import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenubarModule} from 'primeng/menubar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CardContainerComponent } from './shared/card-container/card-container.component';
import { InputTypeaheadComponent } from './shared/input-typeahead/input-typeahead.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PedidoComponent } from './pedido/pedido.component';
import {RestApiService} from './shared/rest-api.service';
import {ProductService} from './shared/product.service';
import { CardTitleComponent } from './shared/card-title/card-title.component';
import {CustomerService} from './shared/customer.service';
import { OrderItemComponent } from './pedido/shared/order-item/order-item.component';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import {FreightService} from './shared/freight.service';
import {OrderService} from './shared/order.service';
import { PedidoListComponent } from './pedido-list/pedido-list.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardContainerComponent,
    InputTypeaheadComponent,
    PedidoComponent,
    CardTitleComponent,
    OrderItemComponent,
    PedidoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MenubarModule,
    MegaMenuModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [RestApiService, ProductService, CustomerService, FreightService, OrderService, { provide: LOCALE_ID, useValue: 'pt-BR' }    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
