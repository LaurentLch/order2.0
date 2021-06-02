import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemListComponent} from "./components/item/item-list/item-list.component";

const routes: Routes = [
  {path:'items', component:ItemListComponent},
  {path:'', redirectTo:'/items', pathMatch: 'full'},
  {path: '**', redirectTo:'/items', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
