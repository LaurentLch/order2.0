import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemListComponent} from "./components/item/item-list/item-list.component";
import {ItemDetailsComponent} from "./components/item/item-details/item-details.component";
import {CustomerListComponent} from "./components/customer/customer-list/customer-list.component";

const routes: Routes = [
  {path:'items', component:ItemListComponent},
  {path:'item/:id', component:ItemDetailsComponent},
  {path:'customers', component:CustomerListComponent},
  {path:'', redirectTo:'/items', pathMatch: 'full'},
  {path: '**', redirectTo:'/items', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
