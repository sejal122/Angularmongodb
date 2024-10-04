import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlldataComponent } from './alldata/alldata.component';
import { EcomitemsComponent } from './ecomitems/ecomitems.component';

export const routes: Routes = [
  {path:"data",
  component : AlldataComponent},
  {path:'items', component:EcomitemsComponent},
  {path:'add', component:EcomitemsComponent},
  {path:'delete', component:EcomitemsComponent},
  {path:'update', component:EcomitemsComponent},
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
