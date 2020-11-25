import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { ItemDescriptionComponent } from './item-description/item-description.component';

const routes: Routes = [
  { path: '', component : InventoryListComponent},  
  { path: 'item', component: ItemDescriptionComponent},
  { path: 'description/:id', component: ItemDescriptionComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
