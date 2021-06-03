import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemListComponent} from "./components/item/item-list/item-list.component";
import {ItemDetailsComponent} from "./components/item/item-details/item-details.component";
import {CustomerListComponent} from "./components/customer/customer-list/customer-list.component";
import {CustomerDetailsComponent} from "./components/customer/customer-details/customer-details.component";
import {ItemCreateComponent} from "./components/item/item-create/item-create.component";

const routes: Routes = [
  {path:'item-create', component: ItemCreateComponent},
  {path:'items', component:ItemListComponent},
  {path:'items/:id', component:ItemDetailsComponent},
  {path:'customers/:id', component:CustomerDetailsComponent},
  {path:'customers', component:CustomerListComponent},
  {path:'', redirectTo:'/items', pathMatch: 'full'},
  {path: '**', redirectTo:'/items', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
