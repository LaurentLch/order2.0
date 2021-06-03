import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { ItemListComponent } from './components/item/item-list/item-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ItemFilterPipe } from './pipes/item/item-filter.pipe';
import { ItemDetailsComponent } from './components/item/item-details/item-details.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerFilterPipe } from './pipes/customer/customer-filter.pipe';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { ItemCreateComponent } from './components/item/item-create/item-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemListComponent,
    ItemFilterPipe,
    ItemDetailsComponent,
    CustomerListComponent,
    CustomerFilterPipe,
    CustomerDetailsComponent,
    ItemCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
