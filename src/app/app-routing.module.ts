import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';                       //this is a important file

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'e', loadChildren: './e/e.module#EPageModule' },
  { path: 'card-listing', loadChildren: './card/card-listing/card-listing.module#CardListingPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
